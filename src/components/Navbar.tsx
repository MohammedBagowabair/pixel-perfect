import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

const links = [
  { to: "/", key: "navHome" },
  { to: "/menu", key: "navMenu" },
  { to: "/about", key: "navAbout" },
  { to: "/contact", key: "navContact" },
] as const;

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-18 max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label={t("brand")}
      >
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl leading-none">{t("brand")}</span>
          <span className="hidden text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase sm:inline">
            est. 2019
          </span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm text-foreground/75 transition-colors hover:text-foreground"
                activeProps={{ className: "text-sm text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {t(l.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-full border border-border px-3 py-1.5 text-xs tracking-wide transition-colors hover:border-foreground/40 hover:bg-secondary"
          >
            {t("langLabel")}
          </button>
          <Link
            to="/menu"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-xs tracking-wide text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            {t("navCta")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("openMenuAria")}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background md:hidden">
          <div className="flex h-18 items-center justify-between px-5">
            <span className="font-display text-2xl">{t("brand")}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("closeMenuAria")}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border"
            >
              <X className="size-4" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col justify-center gap-2 px-6 pb-24">
            {links.map((l, i) => (
              <li key={l.to} className="rise" style={{ animationDelay: `${i * 60}ms` }}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-5 font-display text-4xl"
                >
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
