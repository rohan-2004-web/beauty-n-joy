import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FaqSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const listRef = useScrollReveal<HTMLDivElement>({
    direction: "up",
    delay: 150,
  });

  return (
    <section id="faq" className="py-20 bg-background" data-ocid="faq.section">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-accent mb-3">
            Got Questions?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Frequently <span className="gradient-gold">Asked Questions</span>
          </h2>
        </div>

        <div ref={listRef} data-ocid="faq.list">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-xl border border-border bg-card shadow-card px-6"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="font-body text-sm sm:text-base font-medium text-foreground py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
