import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";

const NewsletterDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent className="rounded-xs">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mt-5">Prijavite se na našu mejling listu</DialogTitle>
          <DialogDescription className="mb-5">
            Prijavite se na našu mejling listu da biste dobijali najnovije informacije o projektima i prilikama za investiranje na dm2 platformi, kao i ostalim aktivnostima.
          </DialogDescription>
        </DialogHeader>

        <div>
          <p>Email</p>
          <input className="border border-zinc-200 rounded-xs p-2 w-full mt-2 mb-1" type="text" placeholder="Email" />
          <p className="text-sm text-zinc-500">Nema spama, obećavamo.</p>
        </div>

        <DialogFooter>
          <div className="bg-[#242424] text-white px-8 py-3 rounded-xs font-bold">Prijavi se</div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;