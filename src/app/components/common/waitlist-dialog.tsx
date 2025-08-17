import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const WaitlistDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="rounded-xs">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mt-5">Prijavite se na listu čekanja</DialogTitle>
          <DialogDescription className="mb-5">
            Prijavite se na listu čekanja da biste dobili prvu poruku o otvaranju prodaje kako ne biste propustili priliku da kupite tokene po prodajnoj ceni.
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>Ime i prezime</p>
          <input className="border border-zinc-200 rounded-xs p-2 w-full mb-3" type="text" placeholder="Ime" />
          <p>Email</p>
          <input className="border border-zinc-200 rounded-xs p-2 w-full mb-3" type="text" placeholder="Email" />
          <p>Telefon</p>
          <input className="border border-zinc-200 rounded-xs p-2 w-full mb-3" type="text" placeholder="Telefon" />
          <p>Vrsta investicije za koju ste zainteresovani</p>
          <Select>
            <SelectTrigger className="border border-zinc-200 rounded-xs p-2 !w-full mb-4 text-md">
              <SelectValue placeholder="Izaberite vrstu investicije" />
            </SelectTrigger>
            <SelectContent className="rounded-xs">
              <SelectItem value="tokene">DM2 tokeni</SelectItem>
              <SelectItem value="decimetre">decimetri kvadratni</SelectItem>
              <SelectItem value="oba">I tokeni, i decimetri kvadratni</SelectItem>
            </SelectContent>
          </Select>
          <p>Koliko biste bili spremni da ulozite u evrima?</p>
          <input className="border border-zinc-200 rounded-xs p-2 w-full" type="text" placeholder="Iznos investicije u evrima" />

          <button className="bg-[#FEE600] font-bold px-8 py-3 rounded-xs w-full mt-10">Prijavi se</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;