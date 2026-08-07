import disputesImg from "../assets/service-disputes.jpg";
import propertyImg from "../assets/service-property.jpg";
import contractsImg from "../assets/service-contracts.jpg";
import businessImg from "../assets/service-business.jpg";
import familyImg from "../assets/service-family.jpg";

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
    image: propertyImg,
  },
  {
    number: "03",
    name: "Landlord Services",
    description:
      "Straightforward legal-document support for landlords, with a focus on clarity, process and fixed-fee certainty.",
    image: businessImg,
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
    image: familyImg,
  },
];

export const ALL_SERVICES: Service[] = [...PRIMARY_SERVICES, ...ADDITIONAL_SERVICES];
