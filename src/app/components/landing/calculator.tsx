import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Dm2Calculator from "../common/landing/dm2-calculator";
import TokenCalculator from "../common/landing/token-calculator";

const Calculator = () => {
  return (
    <div id="kalkulator">
      <div className="max-w-7xl mx-auto p-5 py-20">
        <h2 className="text-4xl font-bold mb-7">Izračunajte svoju zaradu</h2>
        <Tabs defaultValue="dm2">
          <TabsList className="rounded-xs h-auto">
            <TabsTrigger className="py-3 px-5 rounded-xs [&[data-state=active]]:bg-[#242424] [&[data-state=active]]:text-white" value="dm2">Decimetar kvadratni</TabsTrigger>
            <TabsTrigger className="py-3 px-5 rounded-xs [&[data-state=active]]:bg-[#242424] [&[data-state=active]]:text-white" value="dm2-token">dm<sup>2</sup> token</TabsTrigger>
          </TabsList>
          <p className="text-sm text-zinc-500">Kliknite da odaberete kalkulator</p>
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