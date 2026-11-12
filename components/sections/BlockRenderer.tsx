import type { Block } from "@/data/services";
import ServiceHero from "./ServiceHero";
import FaqSection from "./FaqSection";
import {
  CapabilitySection,
  CardsSection,
  CtaSection,
  IconListSection,
  ImageTextSection,
  IntroSection,
} from "./BasicSections";
import {
  BenefitCardsSection,
  ComparisonSection,
  DarkCardsSection,
  ModelsSection,
  NumberedSection,
  PlatformsSection,
  ProcessSection,
} from "./RichSections";

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "hero": return <ServiceHero key={i} {...block} />;
          case "intro": return <IntroSection key={i} {...block} />;
          case "cards": return <CardsSection key={i} {...block} />;
          case "iconList": return <IconListSection key={i} {...block} />;
          case "imageText": return <ImageTextSection key={i} {...block} />;
          case "cta": return <CtaSection key={i} {...block} />;
          case "process": return <ProcessSection key={i} {...block} />;
          case "darkCards": return <DarkCardsSection key={i} {...block} />;
          case "numbered": return <NumberedSection key={i} {...block} />;
          case "models": return <ModelsSection key={i} {...block} />;
          case "benefitCards": return <BenefitCardsSection key={i} {...block} />;
          case "platforms": return <PlatformsSection key={i} {...block} />;
          case "faq": return <FaqSection key={i} {...block} />;
          case "comparison": return <ComparisonSection key={i} {...block} />;
          case "capability": return <CapabilitySection key={i} {...block} />;
        }
      })}
    </>
  );
}
