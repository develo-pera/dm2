import { PhoneCall } from "lucide-react";
import WaitlistDialog from "../waitlist-dialog";

const NavigationCtaAndContact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-7 items-center mt-10 md:mt-0">
      <div className="flex gap-2 items-center">
        <PhoneCall className="h-[20px]" />
        <p className="font-bold">+381 62 626262</p>
      </div>
      <WaitlistDialog>
        <div className="bg-[#FEE600] font-bold px-8 py-3 rounded-xs">
          Uložite u nekretnine
        </div>
      </WaitlistDialog>
    </div>
  );
};

export default NavigationCtaAndContact;