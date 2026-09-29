import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, SectionHeader } from "@/components/Section";
import { MenuCard } from "@/components/MenuCard";
import { ProductModal } from "@/components/ProductModal";
import { menu, featuredIds, type MenuItem } from "@/data/menu";
import { useLang } from "@/lib/i18n";
import heroCoffee from "@/assets/hero-coffee.jpg";
import interior from "@/assets/interior.jpg";
import cappuccino from "@/assets/cappuccino.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "يمن كافيه | YemenCafe — قهوة يمنية مختصة في المكلا" },
      {
        name: "description",
        content:
          "قهوة يمنية مختارة، إفطار طازج وحلويات في قلب المكلا. Specialty Yemeni coffee, fresh breakfast and desserts in Mukalla.",
      },
      { property: "og:title", content: "يمن كافيه | YemenCafe" },
      {
        property: "og:description",
        content: "قهوتك... بطريقتنا — Coffee, our way. Specialty Yemeni coffee in Mukalla.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang, isArabic } = useLang();
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const favorites = featuredIds
    .map((id) => menu.find((m) => m.id === id))
    .filter(Boolean) as MenuItem[];

  return (
    <>
      {/* Hero — editorial split with oversized display type */}
      <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 lg:pb-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="rise">
              <p className="eyebrow">{t("heroEyebrow")}</p>
              <h1 className="mt-5 font-display text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-8xl">
                {t("heroTitle")}
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                {t("heroBody")}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/menu"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {t("heroCta")}
                  <Arrow className="size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-foreground/25 px-7 py-3.5 text-sm transition-colors hover:bg-secondary"
                >
                  {t("heroSecondary")}
                </Link>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-7">
                {[t("statOrigin"), t("statRoast"), t("statHours")].map((s, i) => (
                  <div key={i}>
                    <dt className="font-display text-2xl text-clay">0{i + 1}</dt>
                    <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <img
                src={heroCoffee}
                alt={isArabic ? "فنجان قهوة يمنية" : "A cup of Yemeni coffee"}
                width={1408}
                height={1760}
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
              />
              <img
                src={cappuccino}
                alt={isArabic ? "كابتشينو" : "Cappuccino"}
                loading="lazy"
                width={912}
                height={1104}
                className="absolute bottom-[-2rem] hidden w-40 rounded-xl object-cover shadow-lift sm:block ltr:left-[-2rem] rtl:right-[-2rem]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border bg-primary py-3.5 text-primary-foreground">
        <div className="no-scrollbar overflow-hidden">
          <p className="flex gap-10 px-5 text-sm whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-10">
                {isArabic ? "قهوة مختصة" : "SPECIALTY COFFEE"}
                <span className="text-accent">✳</span>
                {isArabic ? "تحميص يومي" : "ROASTED DAILY"}
                <span className="text-accent">✳</span>
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Favorites */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow={t("favoritesEyebrow")}
            title={t("favoritesTitle")}
            body={t("favoritesBody")}
            action={
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 text-sm whitespace-nowrap text-clay"
              >
                {t("viewFullMenu")}
                <Arrow className="size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>
            }
          />
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {favorites.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} onSelect={setSelected} />
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="bg-sand py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <img
              src={interior}
              alt={isArabic ? "داخل يمن كافيه" : "Inside YemenCafe"}
              loading="lazy"
              width={1408}
              height={1008}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="self-center">
              <p className="eyebrow">{t("aboutEyebrow")}</p>
              <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                {t("aboutTitle")}
              </h2>
              <p className="mt-6 leading-relaxed text-foreground/80">{t("aboutBody")}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{t("aboutBody2")}</p>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm"
              >
                {t("aboutCta")}
                <Arrow className="size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="py-20 lg:py-28">
        <Container>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">{t("whyTitle")}</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {[
              [t("why1Title"), t("why1Body")],
              [t("why2Title"), t("why2Body")],
              [t("why3Title"), t("why3Body")],
            ].map(([title, body], i) => (
              <div key={i} className="bg-background p-8 lg:p-10">
                <span className="font-display text-2xl text-accent">0{i + 1}</span>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProductModal item={selected} onClose={() => setSelected(null)} />
      <span className="sr-only">{lang}</span>
    </>
  );
}
