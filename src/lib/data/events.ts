export type EventCategory =
  | "Flagship"
  | "Competition"
  | "Workshop"
  | "Networking"
  | "Pre-Summit";

export type SummitEvent = {
  slug: string;
  name: string;
  category: EventCategory;
  tagline: string;
  description: string;
  date: string;
  venue: string;
  prizePool?: string;
};

export const events: SummitEvent[] = [
  {
    slug: "get-funded",
    name: "Get-Funded!",
    category: "Flagship",
    tagline: "Pitch to VCs. Walk away with capital.",
    description:
      "i5 Summit's legacy startup event. Founders pitch their ideas to a jury panel of venture capitalists and get direct access to funding opportunities, with 1–3 VCs hosted on the judging panel.",
    date: "21–23 August 2026",
    venue: "New Auditorium, IIM Indore",
    prizePool: "₹2,00,000",
  },
  {
    slug: "socio-innovate",
    name: "Socio-Innovate",
    category: "Competition",
    tagline: "Business solutions for social challenges.",
    description:
      "A dynamic case competition where students tackle real-world social challenges through innovative, actionable business solutions — collaborating in teams to build impactful, well-researched cases that balance social value with practical execution.",
    date: "21–23 August 2026",
    venue: "IIM Indore Campus",
    prizePool: "Up to ₹40,000",
  },
  {
    slug: "the-bottomline-quiz",
    name: "The Bottomline Quiz",
    category: "Competition",
    tagline: "A business quiz that tests it all.",
    description:
      "A quizzing event on business, economy and marketing — challenging financial acumen, marketing savvy and knowledge of current events in a comprehensive format that captures the multi-faceted nature of business.",
    date: "21–23 August 2026",
    venue: "IIM Indore Campus",
    prizePool: "Up to ₹21,000",
  },
  {
    slug: "the-venture-quest",
    name: "The Venture Quest",
    category: "Competition",
    tagline: "Step into the shoes of a founder.",
    description:
      "A business simulation competition where students make real-world entrepreneurial decisions — forecasting demand, managing resources, and designing winning strategies under uncertainty. Combines analytics, creativity and strategic thinking.",
    date: "21–23 August 2026",
    venue: "IIM Indore Campus",
  },
  {
    slug: "startup-expo",
    name: "Startup Expo",
    category: "Networking",
    tagline: "Where startups meet the market.",
    description:
      "A vibrant exhibition platform for emerging businesses to connect with investors, industry experts and the community — showcasing products and services to all attendees and building visibility for funding and partnerships.",
    date: "21–23 August 2026",
    venue: "New Auditorium Common Area, IIM Indore",
  },
  {
    slug: "keynote-speeches",
    name: "Keynote Speeches",
    category: "Networking",
    tagline: "Learn directly from industry titans.",
    description:
      "Keynote addresses delivered by eminent guests from the industry — C-suite executives, founders and investors sharing perspective on this year's theme of AI innovation at scale.",
    date: "21–23 August 2026",
    venue: "New Auditorium, IIM Indore",
  },
  {
    slug: "panel-discussions",
    name: "Panel Discussions",
    category: "Networking",
    tagline: "Entrepreneurs and experts, in conversation.",
    description:
      "Moderated panel discussions bringing together entrepreneurs and experts from across the industry to debate the realities of building and scaling ventures.",
    date: "21–23 August 2026",
    venue: "New Auditorium, IIM Indore",
  },
  {
    slug: "chai-pe-charcha",
    name: "Chai-Pe-Charcha",
    category: "Networking",
    tagline: "Informal conversations, real insight.",
    description:
      "An informal, close-quarters interaction between students and participants — a relaxed setting for candid conversation with founders, investors and speakers.",
    date: "21–23 August 2026",
    venue: "IIM Indore Campus",
  },
  {
    slug: "workshops",
    name: "Workshops",
    category: "Workshop",
    tagline: "Case-solving and product management, hands-on.",
    description:
      "Dedicated workshops for startups to learn from investors and experts, and for participants and college students to learn from founders and investors — including a thrilling case workshop that challenges strategic and analytical skills.",
    date: "21–23 August 2026",
    venue: "Syndicate Rooms, IIM Indore",
  },
  {
    slug: "a-day-at-iim-indore",
    name: "A Day at IIM Indore",
    category: "Pre-Summit",
    tagline: "Live the MBA life, for a day.",
    description:
      "An immersion program designed for CAT aspirants and MBA hopefuls to experience life at IIM Indore first-hand — with allocated mentors and an immersive look at student life, admissions and the MBA journey.",
    date: "21–23 August 2026",
    venue: "IIM Indore Campus",
  },
  {
    slug: "national-case-competition",
    name: "National Level Case Competition",
    category: "Pre-Summit",
    tagline: "i5 Summit's inaugural national case study event.",
    description:
      "A new, national-level case competition launching ahead of the main summit, expecting 600+ participating teams from across India — i5 Summit's first venture into a large-scale pre-summit online case challenge.",
    date: "Early August 2026 (tentative)",
    venue: "Online",
  },
  {
    slug: "online-competitions",
    name: "Online Competitions",
    category: "Pre-Summit",
    tagline: "Compete before you even land on campus.",
    description:
      "A series of competitions run through the fest website and i5 Summit's social media handles, open to participants beyond the physical campus footprint.",
    date: "Ahead of 21–23 August 2026",
    venue: "Online",
  },
];

export const eventCategories: EventCategory[] = [
  "Flagship",
  "Competition",
  "Workshop",
  "Networking",
  "Pre-Summit",
];
