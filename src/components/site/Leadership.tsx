import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { Eyebrow, TextLink } from "./SiteUi";
import founderImage from "../../assets/hero-handshake.jpg";

export function LeadershipBlock() {
  return (
    <section className="grid grid-cols-1 border-b border-clause-border md:grid-cols-[45fr_55fr]">
      <div className="md:border-r md:border-clause-border">
        <RevealImage src={founderImage} alt="Professional legal support meeting" wrapperClassName="h-full" className="aspect-square h-full w-full object-cover object-center" />
      </div>
      <div className="px-4 py-14 md:px-12 md:py-20">
        <Reveal><Eyebrow>About the founder</Eyebrow></Reveal>
        <Reveal delay={0.1}><h2 className="mt-5 font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.625rem,1rem+2.4vw,2.5rem)]">Practical experience. Clear support.</h2></Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 border-t border-clause-border pt-8">
            <p className="font-serif-display text-[24px] leading-[1.2] text-clause-heading md:text-[28px]">Arslahn Gillani</p>
            <p className="mt-2 font-grotesk text-[14px] uppercase tracking-[0.12em] text-clause-sage">Founder · AG Legal Group</p>
            <p className="mt-6 max-w-[540px] font-grotesk text-[15px] leading-[1.75] text-clause-muted md:text-[16px]">Arslahn has over nine years' experience supporting individuals and small businesses across England and Wales, with a practical focus on dispute support, contracts and carefully prepared written legal documents.</p>
            <div className="mt-8"><TextLink to="/about">More about AG Legal Group</TextLink></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
