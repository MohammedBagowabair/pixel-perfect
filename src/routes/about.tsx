import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import interior from "@/assets/interior.jpg";
import heroCoffee from "@/assets/hero-coffee.jpg";
import croissant from "@/assets/croissant.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | About — يمن كافيه YemenCafe" },
      {
        name: "description",
        content:
          "قصة يمن كافيه: حبوب يمنية، تحميص يومي، ومكان دافئ في المكلا. The story behind YemenCafe in Mukalla.",
      },
      { property: "og:title", content: "من نحن | About — YemenCafe" },
      {
        property: "og:description",
        content: "Yemeni beans, daily roasting, and a warm room in Mukalla.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, isArabic } = useLang();

  return (
    <section className="pt-12 pb-20 lg:pt-16 lg:pb-28">
      <Container>
        <p className="eyebrow">{t("aboutEyebrow")}</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
          {t("aboutTitle")}
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <img
            src={interior}
            alt={isArabic ? "داخل يمن كافيه" : "Inside YemenCafe"}
            loading="lazy"
            width={1408}
            height={1008}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <div className="self-center">
            <p className="text-lg leading-relaxed text-foreground/85">{t("aboutBody")}</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">{t("aboutBody2")}</p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">{t("whyTitle")}</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:col-span-2">
            {[
              [t("why1Title"), t("why1Body")],
              [t("why2Title"), t("why2Body")],
              [t("why3Title"), t("why3Body")],
            ].map(([title, body], i) => (
              <div key={i} className="bg-background p-7">
                <span className="font-display text-2xl text-accent">0{i + 1}</span>
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2">
          <img
            src={heroCoffee}
            alt={isArabic ? "قهوة يمنية" : "Yemeni coffee"}
            loading="lazy"
            width={1408}
            height={1760}
            className="aspect-[5/4] w-full rounded-2xl object-cover"
          />
          <img
            src={croissant}
            alt={isArabic ? "مخبوزات طازجة" : "Fresh pastries"}
            loading="lazy"
            width={912}
            height={1104}
            className="aspect-[5/4] w-full rounded-2xl object-cover"
          />
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link
            to="/menu"
            className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("navCta")}
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-foreground/25 px-7 py-3.5 text-sm transition-colors hover:bg-secondary"
          >
            {t("navContact")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
