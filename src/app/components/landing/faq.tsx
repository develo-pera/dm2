import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { LucideChevronsUpDown } from "lucide-react";
import FAQ from "./faq.json";

const Faq = () => {
  return (
    <div id="cesto-postavljana-pitanja" className="max-w-7xl mx-auto p-5 py-20">
      <h2 className="text-4xl font-bold mb-7">Često postavljana pitanja</h2>
      <div className="border border-zinc-300 rounded-xs">
        {FAQ.faq.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger asChild className={`font-bold border-b-1 border-zinc-300 p-3 w-full text-left ${index > 0 ? "border-t-0" : ""} ${index === FAQ.faq.length - 1 ? "!border-b-0" : ""}`}>
              <div className="flex justify-between items-center">
                <h3 dangerouslySetInnerHTML={{ __html: item.question }} />
                <LucideChevronsUpDown className="w-[16px] h-[16px]" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className={`bg-zinc-100 p-3 border-b-1 border-zinc-300 ${index === FAQ.faq.length - 1 ? "!border-b-0 border-t-1" : ""}`}>
              <p dangerouslySetInnerHTML={{ __html: item.answer }} />
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default Faq;