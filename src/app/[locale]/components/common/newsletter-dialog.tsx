"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { useRef, useState } from "react";
import { toast } from "sonner";

const NewsletterDialog = ({ children }: { children: React.ReactNode }) => {
  const [sending, setSending] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = async () => {
    if (!emailRef.current?.value) {
      toast.error("Email je obavezan");
      return;
    }

    if (!emailRef.current.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Email nije validan");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/mailchimp", {
        method: "POST",
        body: JSON.stringify({ email: emailRef.current.value }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Uspešno ste se pretplatili na našu mejling listu");
        emailRef.current.value = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Došlo je do greške prilikom pretplate na našu mejling listu, pokušajte ponovo kasnije.");
    }
    setSending(false);
  };

  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent className="rounded-xs">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mt-5">Prijavite se na našu mejling listu</DialogTitle>
          <DialogDescription className="mb-5">
            Prijavite se na našu mejling listu da biste dobijali najnovije informacije o projektima i prilikama za investiranje na dm<sup>2</sup> platformi, kao i ostalim aktivnostima.
          </DialogDescription>
        </DialogHeader>

        <div>
          <p>Email</p>
          <input ref={emailRef} className="border border-zinc-200 rounded-xs p-2 w-full mt-2 mb-1" type="text" placeholder="Email" />
          <p className="text-sm text-zinc-500">Nema spama, obećavamo.</p>
        </div>

        <DialogFooter>
          <button onClick={handleSubscribe} className="bg-[#242424] text-white px-8 py-3 rounded-xs font-bold cursor-pointer">{sending ? "Slanje u toku..." : "Prijavite se"}</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;