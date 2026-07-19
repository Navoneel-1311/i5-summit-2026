import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { InstagramGlyph, LinkedinGlyph } from "@/components/icons/social";
import { site } from "@/lib/data/site";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/events", label: "Events" },
      { href: "/team", label: "Meet the Team" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: `mailto:${site.email}`, label: site.email },
      { href: site.socials.instagram, label: "Instagram" },
      { href: site.socials.linkedin, label: "LinkedIn" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="section-shell grid grid-cols-1 gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-heading text-lg font-semibold text-white">
              i5 Summit
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
            {site.tagline}, organized by the {site.organizer}. {site.dates.display} · {site.venue}.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="i5 Summit on Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-white/15 text-ink-300 transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              <InstagramGlyph className="size-4" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="i5 Summit on LinkedIn"
              className="flex size-9 items-center justify-center rounded-full border border-white/15 text-ink-300 transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              <LinkedinGlyph className="size-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email i5 Summit"
              className="flex size-9 items-center justify-center rounded-full border border-white/15 text-ink-300 transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-300">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-300 transition-colors hover:text-gold-500"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="section-shell flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-300 md:flex-row">
          <p>
            © {new Date().getFullYear()} i5 Summit, Student Activity Council —
            Indian Institute of Management Indore.
          </p>
          <p>{site.socialHandle}</p>
        </div>
      </div>
    </footer>
  );
}
