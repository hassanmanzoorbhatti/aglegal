import disputesImg from "../assets/ag-service-1-disputes.jpg";
import tenantImg from "../assets/ag-service-2-tenant.jpg";
import landlordImg from "../assets/ag-service-3-landlord.jpg";
import contractsImg from "../assets/ag-service-4-contracts.jpg";
import willsImg from "../assets/ag-service-5-wills.jpg";
import documentReviewImg from "../assets/ag-service-6-document-review.jpg";

export type Service = {
  number: string;
  name: string;
  description: string;
  image?: string;
  details?: string[];
};

export const PRIMARY_SERVICES: Service[] = [
  {
    number: "01",
    name: "Dispute Support",
    description:
      "Practical support for individuals and small businesses dealing with consumer, contract and civil disputes.",
    image: disputesImg,
    details: [
      "Pre-action letters",
      "Consumer complaint letters",
      "CEO escalation letters",
      "Ombudsman guidance and submission support",
      "Debt recovery and payment demand letters",
      "Custom dispute correspondence",
    ],
  },
  {
    number: "02",
    name: "Tenant Services",
    description:
      "Clear, practical document and dispute support for tenants who need their position set out professionally.",
    image: tenantImg,
  },
  {
    number: "03",
    name: "Landlord Services",
    description:
      "Straightforward legal-document support for landlords, with a focus on clarity, process and fixed-fee certainty.",
    image: landlordImg,
  },
];

export const ADDITIONAL_SERVICES: Service[] = [
  {
    number: "04",
    name: "Contracts & Agreements",
    description:
      "Contract drafting and review for individuals, freelancers and small businesses, written clearly and tailored to the situation.",
    image: contractsImg,
    details: [
      "Contract reviews",
      "Service agreements",
      "Personal and business loan agreements",
      "Business and online terms & conditions",
      "Tenancy agreements (ASTs)",
      "Contract amendments and addendums",
      "Employment contracts",
      "Contractor and worker agreements",
    ],
  },
  {
    number: "05",
    name: "Will Services",
    description:
      "Simple will services designed to make an important legal document easier to arrange and understand.",
    image: willsImg,
  },
  {
    number: "06",
    name: "Document Review & Letter Drafting",
    description:
      "Professional review and drafting support for important legal documents, formal letters and written correspondence.",
    image: documentReviewImg,
    details: [
      "Formal letter drafting",
      "Document review and feedback",
      "Complaint and response letters",
      "Custom written legal correspondence",
    ],
  },
];

export const ALL_SERVICES: Service[] = [...PRIMARY_SERVICES, ...ADDITIONAL_SERVICES];
