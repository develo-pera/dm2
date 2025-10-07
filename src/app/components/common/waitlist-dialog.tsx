"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRef, useState } from "react";
import { toast } from "sonner";

const WaitlistDialog = ({ children }: { children: React.ReactNode }) => {
  const [sending, setSending] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [interestedIn, setInterestedIn] = useState<string>("");
  const investmentAmountRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = async () => {
    // Normalize phone: keep leading '+' only if first char, strip all non-digits otherwise
    if (phoneRef.current?.value) {
      const raw = phoneRef.current.value;
      const hasLeadingPlus = raw.trim().startsWith("+");
      const digitsOnly = raw.replace(/\D+/g, "");
      phoneRef.current.value = hasLeadingPlus ? `+${digitsOnly}` : digitsOnly;
    }

    if (!nameRef.current?.value) {
      toast.error("Ime je obavezno");
      return;
    }

    if (!surnameRef.current?.value) {
      toast.error("Prezime je obavezno");
      return;
    }

    if (!emailRef.current?.value) {
      toast.error("Email je obavezan");
      return;
    }

    if (!emailRef.current.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Email nije validan");
      return;
    }

    if (!phoneRef.current?.value) {
      toast.error("Telefon je obavezan");
      return;
    }

    if (!phoneRef.current.value.match(/^\+?[1-9]\d{1,14}$/) && !phoneRef.current.value.match(/^\d{9,10}$/)) {
      toast.error("Telefon nije validan");
      return;
    }

    if (!interestedIn) {
      toast.error("Vrsta investicije je obavezna");
      return;
    }


    if (!investmentAmountRef.current?.value) {
      toast.error("Iznos investicije je obavezan");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/mailchimp", {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          interestedIn: interestedIn,
          investmentAmount: investmentAmountRef.current.value,
          name: nameRef.current.value,
          surname: surnameRef.current.value,
          phone: phoneRef.current.value
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Uspešno ste se prijavili na listu čekanja");
        nameRef.current.value = "";
        surnameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        setInterestedIn("");
        investmentAmountRef.current.value = "";
      } else {
        toast.error("Došlo je do greške prilikom prijave na listu čekanja, pokušajte ponovo kasnije.");
        setSending(false);
        return;
      }

    } catch (error) {
      toast.error("Došlo je do greške prilikom prijave na listu čekanja, pokušajte ponovo kasnije.");
    }
    setSending(false);
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="DialogContent rounded-xs">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mt-5">Prijavite se na listu čekanja</DialogTitle>
          <DialogDescription className="mb-5">
            Prijavite se na listu čekanja da biste dobili prvu poruku o otvaranju prodaje kako ne biste propustili priliku da kupite tokene po prodajnoj ceni.
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>Ime</p>
          <input ref={nameRef} className="border border-zinc-200 rounded-xs p-2 w-full mb-3" type="text" placeholder="Ime" />
          <p>Prezime</p>
          <input ref={surnameRef} className="border border-zinc-200 rounded-xs p-2 w-full mb-3" type="text" placeholder="Prezime" />
          <p>Email</p>
          <input ref={emailRef} className="border border-zinc-200 rounded-xs p-2 w-full mb-3" type="text" placeholder="Email" />
          <p>Telefon</p>
          <input ref={phoneRef} className="border border-zinc-200 rounded-xs p-2 w-full mb-3" type="text" placeholder="Telefon" />
          <p>Vrsta investicije za koju ste zainteresovani</p>
          <Select onValueChange={(value) => setInterestedIn(value)} value={interestedIn}>
            <SelectTrigger className="border border-zinc-200 rounded-xs p-2 !w-full mb-4 text-md">
              <SelectValue placeholder="Izaberite vrstu investicije" />
            </SelectTrigger>
            <SelectContent className="rounded-xs">
              <SelectItem value="TOKENS">DM2 tokeni</SelectItem>
              <SelectItem value="SQUARE_DECIMETERS">decimetri kvadratni</SelectItem>
              <SelectItem value="BOTH">I tokeni, i decimetri kvadratni</SelectItem>
            </SelectContent>
          </Select>
          <p>Koliko biste bili spremni da ulozite u evrima?</p>
          <input ref={investmentAmountRef} className="border border-zinc-200 rounded-xs p-2 w-full" type="text" placeholder="Iznos investicije u evrima" />

          <button onClick={handleSubscribe} className="bg-[#FEE600] font-bold px-8 py-3 rounded-xs w-full mt-10">{sending ? "Slanje u toku..." : "Prijavite se"}</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;