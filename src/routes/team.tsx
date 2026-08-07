import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Sections";
import { LeadershipBlock } from "@/components/site/Leadership";
export const Route=createFileRoute("/team")({head:()=>({meta:[{title:"Founder | AG Legal Group"},{name:"description",content:"Meet Arslahn Gillani, founder of AG Legal Group."}]}),component:()=> <SiteShell><PageHero eyebrow="Founder" title="Experience focused on practical legal support." description="AG Legal Group is led by Arslahn Gillani, who has over nine years' experience supporting individuals and small businesses across England and Wales."/><LeadershipBlock/></SiteShell>});
