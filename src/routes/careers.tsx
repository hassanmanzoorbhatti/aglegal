import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Sections";
import { PrimaryButton } from "@/components/site/SiteUi";
export const Route=createFileRoute("/careers")({head:()=>({meta:[{title:"Contact AG Legal Group"}]}),component:()=> <SiteShell><PageHero eyebrow="AG Legal Group" title="Looking to get in touch?" description="For service enquiries or other questions, contact AG Legal Group directly and the team will respond as soon as possible."/><section className="px-4 py-16 text-center md:px-24 md:py-24"><PrimaryButton to="/contact">Contact AG Legal Group</PrimaryButton></section></SiteShell>});
