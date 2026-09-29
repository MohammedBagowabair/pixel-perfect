import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Music2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div>
          <p className="font-display text-3xl">{t("brandFull")}</p>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">{t("footerTagline")}</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Music2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={["Instagram", "Facebook", "TikTok"][i]}
                className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-primary-foreground/50">{t("footerNav")}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">
                {t("navHome")}
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-primary-foreground/80 hover:text-primary-foreground">
                {t("navMenu")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                {t("navAbout")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                {t("navContact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-primary-foreground/50">{t("footerVisit")}</p>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li>{t("addressValue")}</li>
            <li dir="ltr" className="rtl:text-end">
              +967 700 000 000
            </li>
            <li dir="ltr" className="rtl:text-end">
              hello@yemencafe.com
            </li>
            <li>
              {t("hours1")} · {t("hours1Value")}
            </li>
            <li>
              {t("hours2")} · {t("hours2Value")}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-[88rem] px-5 py-6 text-xs text-primary-foreground/55 sm:px-8 lg:px-12">
          © {new Date().getFullYear()} YemenCafe — {t("rights")}
        </p>
      </div>
    </footer>
  );
}
