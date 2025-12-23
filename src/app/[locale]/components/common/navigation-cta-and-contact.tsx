import { PhoneCall } from "lucide-react";
import WaitlistDialog from "./waitlist-dialog";
import { MOBILE_NUMBER } from "@/lib/consts";
import LanguageSwitcher from "./language-switcher";

const NavigationCtaAndContact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center mt-10 md:mt-0">
      <a href={`tel:${MOBILE_NUMBER.replace(/\s+/g, '')}`}>
        <div className="flex gap-2 items-center md:mr-2">
          <PhoneCall className="h-[20px]" />
          <p className="font-bold">{MOBILE_NUMBER}</p>
        </div>
      </a>

      <WaitlistDialog>
        <div className="bg-[#FEE600] font-bold px-8 py-3 rounded-xs">
          Uložite u nekretnine
        </div>
      </WaitlistDialog>
      <LanguageSwitcher />
    </div>
  );
};

export default NavigationCtaAndContact;