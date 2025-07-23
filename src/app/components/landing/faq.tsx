import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { LucideChevronsUpDown } from "lucide-react";

const Faq = () => {
  return (
    <div id="cesto-postavljana-pitanja" className="max-w-7xl mx-auto p-5 py-20">
      <h2 className="text-4xl font-bold mb-7">Često postavljana pitanja</h2>
      <div>
        <Collapsible>
          <CollapsibleTrigger asChild className="font-bold border border-zinc-300 rounded-t-xs p-3 w-full text-left">
            <div className="flex justify-between items-center">
              <h3>Pitanje 1</h3>
              <LucideChevronsUpDown className="w-[16px] h-[16px]" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-zinc-100 p-3 border-x-1 border-b-1 border-zinc-300">
            <p>Odgovor na pitanje 1</p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger asChild className="font-bold border border-t-0 border-zinc-300 rounded-b-xs p-3 w-full text-left">
            <div className="flex justify-between items-center">
              <h3>Pitanje 2</h3>
              <LucideChevronsUpDown className="w-[16px] h-[16px]" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-zinc-100 p-3 border-x-1 border-b-1 rounded-b-xs border-zinc-300">
            <p>Odgovor na pitanje 2</p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default Faq;