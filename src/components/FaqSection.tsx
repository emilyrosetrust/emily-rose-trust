import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is the Emily Rose Trust?",
    a: "The Emily Rose Trust has been created to ensure that all funds raised are used solely to support Emily Rose and her family. Its purpose is to provide financial stability and allow her parents to focus entirely on spending meaningful time with her.",
  },
  {
    q: "Why is this fundraiser needed?",
    a: "After years of treatment, Emily Rose's condition has deteriorated rapidly and there are no further curative options. Time has become the most precious resource for her family. Financial support allows her parents to step back from work and be fully present with her.",
  },
  {
    q: "How will donations be used?",
    a: "Donations will help cover lost income and essential living costs so Stephen and Karyn can focus on Emily Rose without financial pressure.",
  },
  {
    q: "Is this fundraiser for medical expenses?",
    a: "This fundraiser is primarily about providing financial breathing space. It is about presence, stability, and meaningful time together.",
  },
  {
    q: "How can I donate?",
    a: (
      <>
        You can donate through the official{" "}
        <a href="https://www.gofundme.com/f/support-emily-roses-family-with-time-together" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">GoFundMe campaign</a>{" "}
        or directly to the Emily Rose Trust via the links on this website.
      </>
    ),
  },
  {
    q: "Can I support in ways other than donating?",
    a: "Yes. Sharing Emily Rose's story with friends, family, colleagues, or on social media is incredibly powerful and deeply appreciated.",
  },
  {
    q: "Is the Trust transparent?",
    a: "Yes. The Emily Rose Trust has been structured to ensure funds are used solely to support Emily Rose and her family, with transparency as a guiding principle.",
  },
  {
    q: "Can businesses or organisations contribute?",
    a: "Yes. Corporate support, fundraising events, or network sharing are welcomed. Please contact us directly for partnership discussions.",
  },
  {
    q: "Where can I read updates?",
    a: "Updates are shared in the Updates section of the website to keep supporters informed.",
  },
  {
    q: "How long will the fundraiser run?",
    a: "The fundraiser will remain active as long as needed to support Emily Rose and her family during this time.",
  },
];

const FaqSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-sans text-base font-medium text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
