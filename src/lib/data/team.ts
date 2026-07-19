export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  phone?: string;
};

export type Vertical = {
  slug: string;
  name: string;
  description: string;
  coordinators: TeamMember[];
  members: TeamMember[];
};

export const overallCoordinators: TeamMember[] = [
  {
    name: "Debanshi Mishra",
    role: "Overall Coordinator",
    image: "/images/team/debanshi-mishra.jpeg",
    phone: "+91 95568 59741",
  },
  {
    name: "Param Yadav",
    role: "Overall Coordinator",
    image: "/images/team/param-yadav.jpeg",
    phone: "+91 93542 53863",
  },
];

export const verticals: Vertical[] = [
  {
    slug: "corporate-partnerships",
    name: "Corporate Partnerships",
    description:
      "Secures sponsorship and funding, and drives the brand visibility corporations receive through posters, brochures, certificates and awards across the summit.",
    coordinators: [
      {
        name: "Tanishka Tayal",
        role: "Vertical Coordinator",
        image: "/images/team/tanishka-tayal.jpeg",
        phone: "+91 99892 90614",
      },
      {
        name: "Shlok Gupta",
        role: "Vertical Coordinator",
        image: "/images/team/shlok-gupta.jpeg",
        phone: "+91 97170 82599",
      },
    ],
    members: [
      { name: "Srishti Aasi Ananth", role: "Senior Team" },
      { name: "Md Shahid Jamal", role: "Senior Team" },
      { name: "Bianca J Edward", role: "Senior Team" },
      { name: "Rahul Rohatgi", role: "Senior Team" },
      { name: "Shaurya Vinit Deore", role: "Senior Team" },
    ],
  },
  {
    slug: "corporate-relations",
    name: "Corporate Relations",
    description:
      "Runs pre-fest cold-approaches to speakers and VCs, maintains relationships with industry stalwarts, manages end-to-end stakeholder relations during the fest, and handles post-fest follow-up.",
    coordinators: [
      {
        name: "Kunal Verma",
        role: "Vertical Coordinator",
        image: "/images/team/kunal-verma.jpeg",
      },
      {
        name: "Khushi Patel",
        role: "Vertical Coordinator",
        image: "/images/team/khushi-patel.jpeg",
      },
    ],
    members: [
      { name: "Gayathri Suhas", role: "Senior Team" },
      { name: "Vrudhi Rathi", role: "Senior Team" },
      { name: "Naarayana Kumar", role: "Senior Team" },
      { name: "Rishabh Tyagi", role: "Senior Team" },
      { name: "Angela Adlakha", role: "Senior Team" },
      { name: "Ankita Kishore", role: "Senior Team" },
      { name: "Sanvi Pande", role: "Senior Team" },
      { name: "Pasupuleti Sai Charan Teja", role: "Senior Team" },
      { name: "Paritosh Sharma", role: "Senior Team" },
      { name: "Nandini Lohani", role: "Senior Team" },
      { name: "Shubh Pipalia", role: "Senior Team" },
    ],
  },
  {
    slug: "coverage",
    name: "Coverage",
    description:
      "Owns event coverage and the captured-footage repository, produces the after-movie and promos, and arranges and manages all photography and videography equipment.",
    coordinators: [
      {
        name: "Rajula Pooja",
        role: "Vertical Coordinator",
        image: "/images/team/rajula-pooja.jpeg",
      },
    ],
    members: [
      { name: "Kethavath Sahithi Nayak", role: "Senior Team" },
      { name: "Tushar Sendram", role: "Senior Team" },
      { name: "Tanishq Ashok Kumar", role: "Senior Team" },
      { name: "Wahaaj Ahmed Malik", role: "Senior Team" },
    ],
  },
  {
    slug: "creatives-design",
    name: "Creatives & Design",
    description:
      "Establishes the design language for every event and vertical, and creates all print and digital content for i5 Summit.",
    coordinators: [
      {
        name: "S. Ananya",
        role: "Vertical Coordinator",
        image: "/images/team/s-ananya.jpeg",
      },
      {
        name: "Priyanshi Jhawar",
        role: "Vertical Coordinator",
        image: "/images/team/priyanshi-jhawar.jpeg",
      },
    ],
    members: [
      { name: "Ashita CM", role: "Senior Team" },
      { name: "Sushmitha K", role: "Senior Team" },
    ],
  },
  {
    slug: "events",
    name: "Events",
    description:
      "Owns event-format planning, scheduling and tracking, live event moderation, startup coordination, and on-field risk mitigation.",
    coordinators: [
      {
        name: "Ananya Ranjan",
        role: "Vertical Coordinator",
        image: "/images/team/ananya-ranjan.jpeg",
      },
      {
        name: "Amritha P",
        role: "Vertical Coordinator",
        image: "/images/team/amritha-p.jpeg",
      },
    ],
    members: [
      { name: "Ishika Nayak", role: "Senior Team" },
      { name: "Arundhati Khopade", role: "Senior Team" },
      { name: "Devyanshi Jajoria", role: "Senior Team" },
      { name: "Vansh Aggarwal", role: "Senior Team" },
      { name: "Sujal Chauhan", role: "Senior Team" },
      { name: "Juree Chakma", role: "Senior Team" },
      { name: "Adrija Khandelwal", role: "Senior Team" },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    description:
      "Handles budget planning and control, internal auditing, tracking of online and offline payments, record keeping, and reimbursements across every vertical.",
    coordinators: [
      {
        name: "Sasmit Sinha",
        role: "Vertical Coordinator",
        image: "/images/team/sasmit-sinha.jpeg",
      },
    ],
    members: [
      { name: "Angad Kulkarni", role: "Senior Team" },
      { name: "Garvita Maheshwari", role: "Senior Team" },
      { name: "Mansi Barnwal", role: "Senior Team" },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    description:
      "Delivers hospitality services to guests and stakeholders, manages on-campus crowd flow, and coordinates with the Institute's offices throughout the summit.",
    coordinators: [
      {
        name: "Ayushi Tomar",
        role: "Vertical Coordinator",
        image: "/images/team/ayushi-tomar.jpeg",
      },
    ],
    members: [
      { name: "Khushi Mundra", role: "Senior Team" },
      { name: "Rohit Vishwakarma", role: "Senior Team" },
    ],
  },
  {
    slug: "marketing-participation",
    name: "Marketing & Participation",
    description:
      "Designs go-to-market strategy and publicity campaigns, fosters relationships with startups, runs the Campus Ambassador Programme, and maximises participation and footfall.",
    coordinators: [
      {
        name: "Utkrisht Sikka",
        role: "Vertical Coordinator",
        image: "/images/team/utkrisht-sikka.jpeg",
      },
      {
        name: "Himani Gugulotu",
        role: "Vertical Coordinator",
        image: "/images/team/himani-gugulotu.jpeg",
      },
    ],
    members: [
      { name: "Vanshika Yadav", role: "Senior Team" },
      { name: "Sayali Dhanaraj Warad", role: "Senior Team" },
      { name: "Aishwarya Gajbhiv", role: "Senior Team" },
      { name: "Aparna Panicker", role: "Senior Team" },
    ],
  },
  {
    slug: "media-pr",
    name: "Media & PR",
    description:
      "Creates content for the fest, builds engagement across social channels, maintains i5 Summit's public image, and produces informative content about entrepreneurship.",
    coordinators: [
      {
        name: "Janhavi Joshi",
        role: "Vertical Coordinator",
        image: "/images/team/janhavi-joshi.jpeg",
      },
      {
        name: "Kritika Chawla",
        role: "Vertical Coordinator",
        image: "/images/team/kritika-chawla.jpeg",
      },
    ],
    members: [
      { name: "Prakriti Chitkara", role: "Senior Team" },
      { name: "Arwa Faizee", role: "Senior Team" },
      { name: "Gungun Garg", role: "Senior Team" },
      { name: "Ayushi Sarda", role: "Senior Team" },
      { name: "Lalrinliani", role: "Senior Team" },
    ],
  },
  {
    slug: "operations",
    name: "Operations",
    description:
      "Manages venue and infrastructure setup, vendor and resource coordination, scheduling and on-ground execution, transport and logistics, and contingency and safety management.",
    coordinators: [
      {
        name: "Pranay Khatarkar",
        role: "Vertical Coordinator",
        image: "/images/team/pranay-khatarkar.jpeg",
      },
      {
        name: "Vividha Singh Patel",
        role: "Vertical Coordinator",
        image: "/images/team/vividha-singh-patel.jpeg",
      },
    ],
    members: [
      { name: "Tiyasha Mukherjee", role: "Senior Team" },
      { name: "Kripa", role: "Senior Team" },
      { name: "Deepanshu Kumar", role: "Senior Team" },
      { name: "Jadi Pradeep Kumar", role: "Senior Team" },
      { name: "Ujjwal Jaiswal", role: "Senior Team" },
      { name: "Shah Dhvani Mayurbhai", role: "Senior Team" },
      { name: "Priyanshu Chandrakar", role: "Senior Team" },
      { name: "Aakrit Sugan", role: "Senior Team" },
    ],
  },
  {
    slug: "systems-it",
    name: "Systems & IT",
    description:
      "Designs and manages the responsive summit website, integrates promotional content for digital marketing, provides on-site technical support, and secures registration and media data.",
    coordinators: [
      {
        name: "Navoneel Ghosh",
        role: "Vertical Coordinator",
        image: "/images/team/navoneel-ghosh.jpeg",
      },
    ],
    members: [
      { name: "Aditi Ankush Patil", role: "Senior Team" },
      { name: "Sakshi Gajhbhiye", role: "Senior Team" },
      { name: "Yuva Raaj", role: "Senior Team" },
    ],
  },
];
