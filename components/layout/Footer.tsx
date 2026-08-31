import Link from "next/link";
import {
  BRAND_TAGLINE,
  CONSTRUCT_BASE_PATH,
  CONTACT,
  FOOTER_PLATFORM_LINKS,
  FOOTER_SECONDARY_LINKS,
  SOCIAL_LINKS,
  constructHref,
} from "@/content/navigation";
import { WhatsAppIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from "@/components/icons/Icons";
import { Logo } from "./Logo";

const SOCIAL_ICONS = {
  WhatsApp: WhatsAppIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const;

function FooterColumn({
  title,
  links,
}: {
  title?: string;
  links: { label: string; slug: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      {title ? (
        <p className="font-data text-[13px] font-semibold uppercase tracking-wider text-text-muted">
          {title}
        </p>
      ) : (
        <p aria-hidden="true" className="h-[14px]" />
      )}
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.slug}>
            <Link
              href={constructHref(link.slug)}
              className="font-body text-[15.5px] text-text-secondary transition-colors hover:text-primary-800"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link href={CONSTRUCT_BASE_PATH} className="flex items-center">
            <Logo />
          </Link>
          <p className="max-w-[38ch] font-body text-[15.5px] leading-relaxed text-text-secondary">
            {BRAND_TAGLINE}
          </p>
          <p className="max-w-[36ch] font-body text-[14px] leading-relaxed text-text-muted">
            {CONTACT.address}
          </p>
          <div className="flex items-center gap-3 pt-1">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label];
              const iconClasses =
                "flex h-8 w-8 items-center justify-center rounded-md text-text-muted transition-colors";

              if (social.href === null) {
                return (
                  <span
                    key={social.label}
                    aria-disabled="true"
                    title={`${social.label} — URL not yet configured`}
                    className={`${iconClasses} cursor-not-allowed opacity-40`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                );
              }

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconClasses} hover:bg-neutral-100 hover:text-primary-800`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <FooterColumn title="Platform" links={FOOTER_PLATFORM_LINKS} />
        <FooterColumn links={FOOTER_SECONDARY_LINKS} />
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1.5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[14px] text-text-muted">
            © 2026 Zerotone. All rights reserved.
          </p>
          <p className="font-body text-[14px] text-text-muted">
            Built for builders. Made with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
