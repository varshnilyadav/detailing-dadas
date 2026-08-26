export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  benefits: string[];
  included: string[];
  process: { title: string; description: string }[];
  recommendedFor: string;
}

export const services: Service[] = [
  {
    id: "foam-wash",
    slug: "foam-wash",
    title: "Foam Wash",
    tagline: "Safe, effective exterior cleaning.",
    shortDescription: "A meticulous exterior wash using premium snow foam to safely lift dirt without scratching your paint.",
    description: "Our signature foam wash is the foundation of proper car care. We use pH-neutral snow foam to encapsulate and lift dirt particles safely away from your vehicle's clear coat. This prevents the swirl marks commonly caused by traditional tunnel washes or improper hand washing techniques.",
    image: "/assets/services/foam-wash.jpg",
    benefits: [
      "Scratch-free cleaning process",
      "Removes road grime and traffic film",
      "Safe for ceramic coatings and PPF",
      "Enhances natural gloss"
    ],
    included: [
      "Snow foam pre-soak",
      "Two-bucket safe hand wash",
      "Wheel face and barrel cleaning",
      "Tire dressing",
      "Streak-free glass cleaning"
    ],
    process: [
      { title: "Pre-Rinse", description: "High-pressure rinse to remove loose debris." },
      { title: "Foam Soak", description: "Thick snow foam applied to lift stubborn dirt." },
      { title: "Agitation", description: "Gentle wash with microfiber mitts using the two-bucket method." },
      { title: "Drying", description: "Safe drying using forced air and plush microfiber towels." }
    ],
    recommendedFor: "Regular maintenance every 2-4 weeks to keep your vehicle looking its best."
  },
  {
    id: "ceramic-coating",
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    tagline: "Long-lasting gloss and extreme protection.",
    shortDescription: "Advanced nano-ceramic technology that bonds to your paint, offering years of protection and incredible shine.",
    description: "Ceramic coating is the ultimate liquid armor for your vehicle. By bonding at a molecular level with your clear coat, it creates a semi-permanent layer of protection that is harder than factory paint. It provides extreme hydrophobicity, making your car self-cleaning and incredibly easy to maintain.",
    image: "/assets/services/ceramic-coating.jpg",
    benefits: [
      "Years of durable protection",
      "Extreme hydrophobic (water-repelling) properties",
      "Candy-like gloss and depth",
      "Protection against UV rays and oxidation",
      "Chemical resistance to bird droppings and sap"
    ],
    included: [
      "Decontamination wash",
      "Clay bar treatment",
      "Single stage paint enhancement (polish)",
      "Panel wipe prep",
      "Professional ceramic coating application"
    ],
    process: [
      { title: "Prep Wash", description: "Thorough stripping wash to remove old waxes." },
      { title: "Decontamination", description: "Chemical and mechanical removal of embedded iron and fallout." },
      { title: "Paint Correction", description: "Machine polishing to remove swirls and maximize gloss." },
      { title: "Application", description: "Careful leveling of the ceramic coating onto all painted surfaces." }
    ],
    recommendedFor: "New vehicles, recently polished vehicles, or anyone wanting long-term protection."
  },
  {
    id: "ppf",
    slug: "ppf-wrap-sunfilm",
    title: "PPF / Wrap / Sunfilm",
    tagline: "The ultimate physical barrier against the elements.",
    shortDescription: "Paint Protection Film (PPF), Vinyl Wraps, and Automotive Sunfilm to protect and customize your ride.",
    description: "Whether you want invisible rock chip protection with PPF, a complete color change with a vinyl wrap, or heat rejection with premium sunfilm, we provide flawless installations using industry-leading materials.",
    image: "/assets/services/ppf.jpg",
    benefits: [
      "Self-healing scratch protection (PPF)",
      "Prevents rock chips and road damage",
      "Customizable aesthetics (Wraps)",
      "Heat and UV rejection (Sunfilm)"
    ],
    included: [
      "Meticulous surface preparation",
      "Custom template cutting",
      "Seamless edge wrapping",
      "Post-installation quality check"
    ],
    process: [
      { title: "Consultation", description: "Choosing the right film for your needs." },
      { title: "Prep", description: "Deep cleaning and decontamination of the surface." },
      { title: "Installation", description: "Expert application using slip solutions and heat." },
      { title: "Curing", description: "Allowing the film to settle and bond properly." }
    ],
    recommendedFor: "High-impact areas (bumper, hood), complete vehicle protection, or custom styling."
  },
  {
    id: "interior-detailing",
    slug: "interior-detailing",
    title: "Interior Detailing",
    tagline: "Restore your cabin to factory freshness.",
    shortDescription: "Deep cleaning, stain removal, and protection for all interior surfaces including leather, fabric, and plastics.",
    description: "You spend all your time inside the car, so it deserves just as much attention as the outside. Our interior detailing service deeply cleans, sanitizes, and protects every inch of your cabin, returning it to a like-new condition.",
    image: "/assets/services/interior-detailing.jpg",
    benefits: [
      "Removal of tough stains and odors",
      "Sanitization of high-touch areas",
      "UV protection for plastics and leather",
      "Restores original matte finish (no greasy shine)"
    ],
    included: [
      "Thorough vacuuming",
      "Steam cleaning of vents and crevices",
      "Leather deep cleaning and conditioning",
      "Fabric extraction (if needed)",
      "Interior glass cleaning"
    ],
    process: [
      { title: "Vacuum & Dust", description: "Removing loose dirt from all surfaces." },
      { title: "Deep Clean", description: "Using specialized cleaners and brushes on panels and seats." },
      { title: "Steam & Extract", description: "Lifting stubborn stains and sanitizing." },
      { title: "Protect", description: "Applying non-greasy UV protectants to all materials." }
    ],
    recommendedFor: "Daily drivers, family vehicles, or preparing a car for sale."
  },
  {
    id: "exterior-detailing",
    slug: "exterior-detailing",
    title: "Exterior Detailing",
    tagline: "Rejuvenate your vehicle's paint and trim.",
    shortDescription: "Comprehensive exterior deep cleaning, decontamination, and gloss enhancement.",
    description: "More than just a wash, our exterior detailing involves a deep chemical and mechanical decontamination of your paint, followed by a polish to enhance gloss and a sealant to protect the finish.",
    image: "/assets/services/exterior-detailing.jpg",
    benefits: [
      "Removes embedded contamination",
      "Restores smooth-as-glass feel to paint",
      "Enhances depth and clarity",
      "Provides short-to-medium term protection"
    ],
    included: [
      "Foam wash",
      "Iron decontamination",
      "Clay bar treatment",
      "Machine applied polish/sealant",
      "Trim dressing"
    ],
    process: [
      { title: "Wash", description: "Thorough two-bucket wash." },
      { title: "Decontaminate", description: "Removing iron particles and bonded dirt." },
      { title: "Enhance", description: "Light machine polish to boost gloss." },
      { title: "Protect", description: "Application of a premium paint sealant." }
    ],
    recommendedFor: "Vehicles that feel rough to the touch or lack shine."
  },
  {
    id: "ac-sterilization",
    slug: "ac-sterilization",
    title: "A/C Sterilization",
    tagline: "Breathe clean, fresh air.",
    shortDescription: "Eliminates odors, bacteria, and mold from your vehicle's air conditioning system.",
    description: "Over time, your car's A/C system can harbor bacteria and mold, leading to musty odors and poor air quality. Our sterilization process cleans the system from the inside out.",
    image: "/assets/services/ac-sterilization.jpg",
    benefits: [
      "Eliminates musty A/C odors",
      "Kills bacteria and mold spores",
      "Improves cabin air quality",
      "Enhances cooling efficiency"
    ],
    included: [
      "A/C vent steam cleaning",
      "Evaporator core cleaning treatment",
      "Ozone generator treatment (optional)",
      "Cabin air filter inspection"
    ],
    process: [
      { title: "Inspect", description: "Checking the cabin air filter condition." },
      { title: "Treat", description: "Injecting antibacterial cleaner into the A/C system." },
      { title: "Circulate", description: "Running the system to distribute the cleaner." },
      { title: "Purify", description: "Optional ozone treatment for severe odors." }
    ],
    recommendedFor: "Cars with bad odors, older vehicles, or allergy sufferers."
  },
  {
    id: "engine-degreasing",
    slug: "engine-degreasing",
    title: "Engine Degreasing",
    tagline: "A clean engine runs cooler and looks better.",
    shortDescription: "Safe and thorough cleaning of your engine bay to remove grease, oil, and dirt.",
    description: "A clean engine bay not only looks great but makes spotting leaks and doing maintenance easier. We use safe degreasers and low-pressure water to clean without damaging sensitive electronics.",
    image: "/assets/services/engine-degreasing.jpg",
    benefits: [
      "Removes heavy grease and grime",
      "Makes spotting leaks easier",
      "Improves resale value",
      "Protects plastics and hoses from drying out"
    ],
    included: [
      "Covering sensitive electronics",
      "Application of safe degreaser",
      "Agitation with detailing brushes",
      "Low-pressure rinse",
      "Dressing plastics and hoses"
    ],
    process: [
      { title: "Prep", description: "Protecting the alternator, intake, and electrical boxes." },
      { title: "Degrease", description: "Applying cleaner and letting it break down the grime." },
      { title: "Agitate", description: "Brushing all accessible areas." },
      { title: "Dress", description: "Applying a water-based dressing for a satin finish." }
    ],
    recommendedFor: "Before selling a car, after a fluid leak is fixed, or for show cars."
  }
];
