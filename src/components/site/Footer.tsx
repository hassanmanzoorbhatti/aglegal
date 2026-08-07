import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { FIRM } from "@/lib/site-data";
import { Wordmark } from "./SiteUi";

const SERVICE_LINKS = [
  "Dispute Support",
  "Tenant Services",
  "Landlord Services",
  "Contracts & Agreements",
  "Will Services",
];

function ColumnHeading({ children }: { children: string }) {
  return <h4 className="font-grotesk text-[12px] font-semibold uppercase tracking-[0.14em] text-clause-muted">{children}</h4>;
}

export function Footer() {
  return (
    <footer className="border-x border-clause-border bg-clause-bg">
      <div className="px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.25fr] lg:gap-12">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[320px] font-grotesk text-[15px] leading-[1.65] text-clause-muted">{FIRM.description}</p>
          </div>
          <div>
            <ColumnHeading>Services</ColumnHeading>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((s) => <li key={s}><Link to="/services" className="font-grotesk text-[15px] text-clause-cream hover:opacity-70">{s}</Link></li>)}
            </ul>
          </div>
          <div>
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="mt-5 space-y-3">
              <li><Link to="/about" className="font-grotesk text-[15px] text-clause-cream hover:opacity-70">About</Link></li>
              <li><Link to="/services" className="font-grotesk text-[15px] text-clause-cream hover:opacity-70">Service List</Link></li>
              <li><Link to="/contact" className="font-grotesk text-[15px] text-clause-cream hover:opacity-70">Contact</Link></li>
            </ul>
          </div>
          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <div className="mt-5 space-y-4 font-grotesk text-[15px] text-clause-cream">
              <a href={`mailto:${FIRM.email}`} className="flex items-start gap-3 hover:opacity-70"><Mail className="mt-0.5 h-4 w-4 text-clause-sage" />{FIRM.email}</a>
              <a href={`tel:${FIRM.phoneTel}`} className="flex items-center gap-3 hover:opacity-70"><Phone className="h-4 w-4 text-clause-sage" />{FIRM.phone}</a>
              <a href={FIRM.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-70"><MessageCircle className="h-4 w-4 text-clause-sage" />Chat on WhatsApp</a>
            </div>
            <p className="mt-6 font-grotesk text-[13px] leading-[1.6] text-clause-muted">Supporting individuals and small businesses across England and Wales.</p>
            <a href="https://www.aglegalgroup.co.uk/copy-of-terms-of-use" target="_blank" rel="noreferrer" className="mt-3 inline-block font-grotesk text-[12px] uppercase tracking-[0.1em] text-clause-muted underline underline-offset-4 hover:text-clause-cream">Service Disclaimer</a>
          </div>
        </div>
      </div>
      <div className="border-t border-clause-border px-4 py-6 md:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-grotesk text-[12px] text-clause-muted">© {new Date().getFullYear()} AG Legal Group. All rights reserved.</p>
          <p className="max-w-[620px] font-grotesk text-[11px] leading-[1.55] text-clause-muted md:text-right">AG Legal Group provides legal drafting, legal information and procedural support. It does not provide legal representation or carry out reserved legal activities.</p>
        </div>
      </div>
    </footer>
  );
}
