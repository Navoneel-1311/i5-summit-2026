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
      "i5 Summit's legacy startup event. Founders pitch their ideas to a jury panel of venture capitalists and get direct access to funding opportunities, with 1–3 VCs hosted on the judging panel. Prize pool of ₹1,50,000, split ₹70,000 for 1st, ₹50,000 for 2nd and ₹30,000 for 3rd place.",
    date: "29-30 August 2026",
    venue: "New Auditorium, IIM Indore",
    prizePool: "₹1,50,000",
  },
  {
    slug: "a-day-at-iim-indore",
    name: "A Day at IIM Indore",
    category: "Flagship",
    tagline: "Live the MBA life, for a day.",
    description:
      "An event catering to the needs of CAT aspirants by allocating mentors and organizing an immersive experience into student life at IIM Indore.",
    date: "29-30 August 2026",
    venue: "IIM Indore Campus",
  },
  {
    slug: "chai-pe-charcha",
    name: "Chai-Pe-Charcha",
    category: "Networking",
    tagline: "Informal conversations, real insight.",
    description:
      "An interactive panel discussion with IIM Indore students, offering participants an opportunity to gain insights into campus life, academics, student experiences, and case competitions, while engaging in an open Q&A session.",
    date: "29-30 August 2026",
    venue: "IIM Indore Campus",
  },
  {
    slug: "speaker-session",
    name: "Speaker Session",
    category: "Networking",
    tagline: "Speaker session with a guest speaker along with Q&A",
    description:
      "An intimate session featuring a guest speaker from industry, followed by an open Q&A with attendees.",
    date: "29-30 August 2026",
    venue: "New Auditorium, IIM Indore",
  },
  {
    slug: "workshops",
    name: "Workshops",
    category: "Workshop",
    tagline: "Case-solving and product management, hands-on.",
    description:
      "Interactive case workshops designed to help participants develop structured problem-solving, analytical thinking, and case-solving skills through practical business scenarios and expert-led insights.",
    date: "29-30 August 2026",
    venue: "Syndicate Rooms, IIM Indore",
  },
];

export const eventCategories: EventCategory[] = [
  "Flagship",
  "Competition",
  "Workshop",
  "Networking",
  "Pre-Summit",
];