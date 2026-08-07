import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText, MessagesSquare, ShieldCheck } from "lucide-react";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { RevealImage } from "@/components/motion/RevealImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { HERO_DELAY } from "@/lib/motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { LeadershipBlock } from "@/components/site/Leadership";
import { FinalCta } from "@/components/site/Sections";
import { Eyebrow, PrimaryButton, Ribbon, ScrollDot, TextLink } from "@/components/site/SiteUi";
import { FIRM, HERO_STATS } from "@/lib/site-data";
import { ALL_SERVICES, type Service } from "@/lib/services";
import heroImage from "../assets/hero-consultation.jpg";
import disputesImage from "../assets/service-disputes.jpg";
import contractsImage from "../assets/service-contracts.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AG Legal Group | Fixed-Fee Legal Support UK" },
      { name: "description", content: "Clear, practical, fixed-fee legal drafting and dispute support for individuals and small businesses across England and Wales." },
      { property: "og:title", content: "AG Legal Group | Fixed-Fee Legal Support UK" },
      { property: "og:description", content: "Professional legal drafting, dispute support, tenant and landlord services, contracts and will services across England and Wales." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[52fr_48fr]">
      <div className="md:order-2 md:border-l md:border-clause-border">
        <RevealImage src={heroImage} alt="Professional legal consultation" width={1024} height={1229} wrapperClassName="h-full w-full" className="aspect-[1/1.2] w-full object-cover object-[center_28%]" />
      </div>
      <div className="flex flex-col justify-center px-4 py-12 md:order-1 md:px-12 md:py-20">
        <Reveal immediate delay={HERO_DELAY - 0.1}><Eyebrow>AG Legal Group</Eyebrow></Reveal>
        <AnimatedText as="h1" immediate delay={HERO_DELAY} text={"Clear. Practical.\nFixed-Fee Legal\nSupport."} className="mt-5 font-serif-display font-normal leading-[1.1] text-clause-heading text-[32px] md:text-[clamp(2rem,1rem+2.5vw,3rem)]" />
        <RevealGroup immediate delay={HERO_DELAY + 0.35} stagger={0.12}>
          <RevealItem><p className="mt-5 max-w-[470px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:mt-6 md:text-[17px]">Professional legal drafting and dispute support for individuals and small businesses across England and Wales — without the cost or complexity.</p></RevealItem>
          <RevealItem className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton to="/contact">Start Now</PrimaryButton>
            <a href={FIRM.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center border border-clause-line px-6 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-clause-cream transition-colors hover:bg-clause-pink/[0.07]">Chat on WhatsApp</a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

function HeroStats() {
  return <RevealGroup className="grid grid-cols-1 border-t border-clause-border sm:grid-cols-3" stagger={0.12}>{HERO_STATS.map((s,i)=><RevealItem key={s.label} className={`border-clause-border px-5 py-9 text-center sm:py-12 ${i>0?"border-t sm:border-l sm:border-t-0":""}`}><div className="font-serif-display text-[clamp(2rem,1rem+3vw,3rem)] leading-none text-clause-heading">{s.number}</div><div className="mx-auto mt-3 max-w-[190px] font-grotesk text-[14px] text-clause-muted">{s.label}</div></RevealItem>)}</RevealGroup>;
}

function Introduction() {
  return <section className="border-t border-clause-border px-4 py-16 md:px-24 md:py-28"><div className="mx-auto max-w-[850px] text-center"><Reveal><Eyebrow>About AG Legal Group</Eyebrow></Reveal><AnimatedText as="h2" text="Straightforward legal support, built around clarity and real-world outcomes." stagger={0.02} className="mt-6 font-serif-display font-normal text-clause-heading text-[clamp(1.6rem,1rem+2.4vw,2.65rem)] leading-[1.25]"/><Reveal delay={0.2}><p className="mx-auto mt-6 max-w-[690px] font-grotesk text-[15px] leading-[1.75] text-clause-muted md:text-[17px]">AG Legal Group supports individuals and small businesses with professionally drafted legal documents, dispute support and fixed-fee services. The approach is simple: understand the issue, set out the position clearly, and provide focused support without unnecessary complexity or inflated costs.</p></Reveal><Reveal delay={0.28}><div className="mt-8 flex justify-center"><TextLink to="/about">Find out more</TextLink></div></Reveal></div></section>;
}

function ServiceCard({ service }: { service: Service }) {
  return <Link to="/services" className="group flex h-full flex-col" aria-label={service.name}><div className="relative aspect-[4/3] overflow-hidden"><RevealImage src={service.image!} alt={service.name} wrapperClassName="h-full w-full" className="h-full w-full object-cover" hoverScale/><div className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center bg-clause-bg"><ArrowUpRight className="h-4 w-4 text-clause-pink"/></div></div><div className="flex flex-1 flex-col p-6 md:p-8"><span className="font-grotesk text-[12px] font-semibold tracking-[0.14em] text-clause-sage">{service.number}</span><h3 className="mt-3 font-serif-display text-[22px] leading-[1.2] text-clause-heading md:text-[24px]">{service.name}</h3><p className="mt-3 font-grotesk text-[15px] leading-[1.65] text-clause-muted">{service.description}</p></div></Link>;
}

function Services() {
  return <section className="border-t border-clause-border"><div className="border-b border-clause-border px-4 py-16 md:px-24 md:py-24"><div className="mx-auto max-w-[700px] md:text-center"><Reveal><Eyebrow>Our Services</Eyebrow></Reveal><AnimatedText as="h2" text={"Focused legal support\nfor everyday matters."} className="mt-5 font-serif-display font-normal leading-[1.12] text-clause-heading text-[clamp(1.75rem,1rem+3vw,3rem)]"/><Reveal delay={0.15}><p className="mt-5 font-grotesk text-[16px] leading-[1.65] text-clause-muted md:text-[17px]">Professional drafting, dispute correspondence and practical support, delivered with transparent fixed-fee pricing wherever possible.</p></Reveal></div></div><RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" stagger={0.08}>{ALL_SERVICES.map((s,i)=><RevealItem key={s.name} className={`h-full border-b border-clause-border ${i>0?"lg:border-l":""}`}><ServiceCard service={s}/></RevealItem>)}</RevealGroup><div className="border-b border-clause-border px-4 py-10 text-center"><PrimaryButton to="/services">Explore All Services</PrimaryButton></div></section>;
}

const APPROACH = [
  { icon: MessagesSquare, title: "Clear Communication", body: "Straightforward explanations and professionally structured documents." },
  { icon: ShieldCheck, title: "Fixed-Fee Clarity", body: "Transparent pricing wherever possible, so you know where you stand from the outset." },
  { icon: FileText, title: "Detail-Focused Support", body: "Careful drafting tailored to your situation, with a practical focus on the next step." },
];

function Approach() {
  return <section className="px-4 py-16 md:px-24 md:py-28"><div className="text-center"><Reveal><Eyebrow>Why choose us?</Eyebrow></Reveal><AnimatedText as="h2" text="Professional support without unnecessary complexity." className="mt-5 font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.625rem,1rem+2.7vw,2.5rem)]"/></div><RevealGroup className="mt-12 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-14" stagger={0.12}>{APPROACH.map(({icon:Icon,title,body})=><RevealItem key={title} className="flex gap-5 md:flex-col md:items-center md:text-center"><div className="flex h-12 w-12 shrink-0 items-center justify-center border border-clause-border bg-clause-surface md:h-16 md:w-16"><Icon className="h-5 w-5 text-clause-sage md:h-6 md:w-6" strokeWidth={1.5}/></div><div className="md:mt-6"><h3 className="font-serif-display text-[20px] text-clause-heading">{title}</h3><p className="mt-2 max-w-[300px] font-grotesk text-[15px] leading-[1.65] text-clause-muted md:mx-auto">{body}</p></div></RevealItem>)}</RevealGroup></section>;
}

function DetailFeature() {
  return <section className="grid grid-cols-1 border-t border-clause-border md:grid-cols-2"><div className="grid grid-cols-2"><RevealImage src={disputesImage} alt="Dispute support and legal correspondence" wrapperClassName="h-full" className="h-full min-h-[360px] w-full object-cover"/><RevealImage src={contractsImage} alt="Contract drafting and review" wrapperClassName="h-full border-l border-clause-border" className="h-full min-h-[360px] w-full object-cover"/></div><div className="px-4 py-14 md:border-l md:border-clause-border md:px-14 md:py-20"><Reveal><Eyebrow>Practical support</Eyebrow></Reveal><AnimatedText as="h2" text="Get your position set out clearly and professionally." className="mt-5 font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.625rem,1rem+2.5vw,2.5rem)]"/><Reveal delay={0.2}><p className="mt-6 max-w-[520px] font-grotesk text-[15px] leading-[1.75] text-clause-muted md:text-[16px]">From pre-action and complaint letters to contract reviews, service agreements and terms & conditions, AG Legal Group focuses on well-structured written work that helps clients understand and strengthen their position.</p></Reveal><Reveal delay={0.28}><div className="mt-8"><TextLink to="/services">View service list</TextLink></div></Reveal></div></section>;
}

function Index() {
  return <div className="min-h-screen bg-clause-bg px-2 pb-2 md:p-0"><div className="mx-auto min-h-[calc(100vh-0.5rem)] max-w-[1320px] border border-clause-border md:min-h-screen md:border-x md:border-y-0"><Navbar/><div className="h-16 lg:hidden" aria-hidden="true"/><Hero/><HeroStats/><Ribbon className="h-8 border-t border-clause-border"/><Introduction/><Services/><Approach/><DetailFeature/><LeadershipBlock/><FinalCta/><Footer/></div><ScrollDot/></div>;
}
