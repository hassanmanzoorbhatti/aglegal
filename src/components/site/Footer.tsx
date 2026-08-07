import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { FIRM } from "@/lib/site-data";
import { Wordmark } from "./SiteUi";

const SERVICE_LINKS = [
  "Dispute Support",
  "Tenant Services",
  "Landlord Services",
  "Contracts & Agreements",
  "Will Services",
  "Document Review & Letter Drafting",
];


function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

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
              <a href={FIRM.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-[46px] items-center gap-2.5 bg-[#25D366] px-4 py-3 font-grotesk text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-all hover:opacity-90"><WhatsAppIcon className="h-5 w-5" />Chat on WhatsApp</a>
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
