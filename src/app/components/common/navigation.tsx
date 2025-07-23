import MainMenu from "./main-menu";
import MobileMenu from "./mobile-menu";
import NavigationCtaAndContact from "./navigation-cta-and-contact";

const Navigation = () => {
  return (
    <div>
      <div className="border-b border-black/10">
        <div className="max-w-7xl mx-auto py-6 px-5 flex justify-between items-center">
          <img className="h-[35px]" src="/dm2-logo.svg" alt="logo" />
          <div className="flex items-center gap-10">
            <div className="hidden md:block">
              <NavigationCtaAndContact />
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
      <div className="hidden lg:block border-b border-black/10">
        <div className="max-w-7xl mx-auto py-4 px-5 flex justify-between items-center text-sm">
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default Navigation;