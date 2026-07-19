export type Sponsor = {
  name: string;
  image: string;
};

export const pastSponsors: Sponsor[] = [
  { name: "State Bank of India", image: "/images/sponsors/sbi.jpeg" },
  { name: "ICICI Bank", image: "/images/sponsors/icici.jpeg" },
  { name: "Central Bank of India", image: "/images/sponsors/central-bank.jpeg" },
  { name: "Union Bank of India", image: "/images/sponsors/union-bank.jpeg" },
  { name: "Punjab National Bank", image: "/images/sponsors/pnb.jpeg" },
  { name: "Deutsche Bank", image: "/images/sponsors/deutsche-bank.jpeg" },
  { name: "adda52.com", image: "/images/sponsors/adda52.jpeg" },
  { name: "OYO", image: "/images/sponsors/oyo.jpeg" },
  { name: "TATA", image: "/images/sponsors/tata.jpeg" },
  { name: "FinWizz", image: "/images/sponsors/finwizz.jpeg" },
  { name: "makeintern.com", image: "/images/sponsors/makeintern.jpeg" },
  { name: "Slamitt", image: "/images/sponsors/slamitt.jpeg" },
  { name: "Indore Masala", image: "/images/sponsors/indore-masala.jpeg" },
];

export const sponsorBenefits = [
  {
    title: "Brand Visibility",
    points: [
      "Exposure to a diverse audience of students, academicians, industry professionals and media",
      "Logo on all brochures, pamphlets, posters and certificates",
      "Hyperlink on the i5 Summit website",
      "Mention in the past sponsors' slide and emcee shoutouts during breaks",
    ],
  },
  {
    title: "Market Positioning",
    points: [
      "Enhance brand image by associating with a prestigious event celebrating excellence and innovation",
      "Customised event backdrops and individual event sponsorship",
      "Representatives hosted on event panels",
      "High tea with industry leaders and guests",
    ],
  },
  {
    title: "Recognition & Rewards",
    points: [
      "Novelty cheques presented to winners",
      "Merchandise distribution for speakers and winners",
      "Logo on team t-shirts and pamphlet distribution",
    ],
  },
  {
    title: "Student & Data Access",
    points: [
      "Account opening / outreach drives for incoming students",
      "Access to past and current student database",
      "Access to a pool of highly motivated, talented individuals for recruitment drives",
    ],
  },
] as const;
