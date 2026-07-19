export const gallery = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/gallery/glimpse-${n}.jpeg`,
    alt: `i5 Summit glimpse ${n}`,
  };
});

export const roadmap = [
  {
    title: "Team Formation",
    period: "Nov 2025 – Jan 2026",
    description:
      "Overall Coordinators and vertical coordinators selected democratically; the core team is allocated across 11 verticals.",
  },
  {
    title: "Sponsorship & Outreach Begins",
    period: "Feb – Jul 2026",
    description:
      "Sponsorship brochures finalized; corporate, banking and speaker outreach kicks off alongside the Industry Interface Office.",
  },
  {
    title: "National Level Case Competition",
    period: "Early August 2026 (tentative)",
    description:
      "i5 Summit's inaugural national case study event, open to 600+ teams from across India — the first major pre-summit milestone.",
  },
  {
    title: "i5 Summit 2026",
    period: "21–23 August 2026",
    description:
      "Three days on the IIM Indore campus: keynotes, panels, Get-Funded, Socio-Innovate, The Bottomline Quiz, The Venture Quest, the Startup Expo and more.",
  },
];
