import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LucideMenu } from "lucide-react";
import MainMenu from "./main-menu";
import NavigationCtaAndContact from "./navigation-cta-and-contact";

const MobileMenu = () => {
  return (
    <div>
      <Sheet >
        <SheetTrigger className="lg:hidden"><LucideMenu /></SheetTrigger>
        <SheetContent>
          <div className="mt-15">
            <MainMenu />
            <div className="block md:hidden">
              <NavigationCtaAndContact />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;