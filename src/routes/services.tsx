import { createFileRoute } from "@tanstack/react-router";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { PageHero, SiteShell } from "@/components/site/Sections";
import { ALL_SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Legal Support Services | AG Legal Group" }, { name: "description", content: "Dispute support, tenant and landlord services, contracts and agreements, and will services across England and Wales." }], links: [{ rel: "canonical", href: "/services" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  return <SiteShell><PageHero eyebrow="Our Services" title={"Clear, practical support\nfor the legal work in front of you."} description="Fixed-fee legal drafting and dispute support for individuals, freelancers and small businesses across England and Wales."/><section><RevealGroup className="grid grid-cols-1 md:grid-cols-2" stagger={0.1}>{ALL_SERVICES.map((s,i)=><RevealItem key={s.name} className={`border-b border-clause-border p-6 md:p-10 ${i%2===1?"md:border-l":""}`}>{s.image&&<RevealImage src={s.image} alt={s.name} className="mb-7 aspect-[16/10] w-full object-cover" hoverScale/>}<div className="font-grotesk text-[13px] font-semibold tracking-[0.14em] text-clause-sage">{s.number}</div><h2 className="mt-3 font-serif-display text-[26px] leading-[1.2] text-clause-heading">{s.name}</h2><p className="mt-3 max-w-[520px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">{s.description}</p>{s.details&&<ul className="mt-6 grid gap-2 border-t border-clause-border pt-5">{s.details.map(d=><li key={d} className="font-grotesk text-[14px] leading-[1.55] text-clause-cream">— {d}</li>)}</ul>}</RevealItem>)}</RevealGroup></section></SiteShell>;
}
