import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Dm2Calculator from "../common/landing/dm2-calculator";
import TokenCalculator from "../common/landing/token-calculator";
import { useTranslations } from "next-intl";

const Calculator = () => {
  const t = useTranslations("Home")
  return (
    <div id="kalkulator">
      <div className="max-w-7xl mx-auto p-5 py-20">
        <h2 className="text-4xl font-bold mb-7">{t("calculator.title")}</h2>
        <Tabs defaultValue="dm2">
          <TabsList className="rounded-xs h-auto">
            <TabsTrigger className="py-3 px-5 rounded-xs [&[data-state=active]]:bg-[#242424] [&[data-state=active]]:text-white" value="dm2">{t("calculator.tabs-title-1")}</TabsTrigger>
            <TabsTrigger className="py-3 px-5 rounded-xs [&[data-state=active]]:bg-[#242424] [&[data-state=active]]:text-white" value="dm2-token">{t("calculator.tabs-title-2")}</TabsTrigger>
          </TabsList>
          <p className="text-sm text-zinc-500">{t("calculator.tabs-description")}</p>
          <TabsContent value="dm2" className="mt-10">
            <Dm2Calculator />
          </TabsContent>
          <TabsContent value="dm2-token" className="mt-10">
            <TokenCalculator />
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
};

export default Calculator;