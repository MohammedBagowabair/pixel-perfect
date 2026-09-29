import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Music2 } from "lucide-react";
import { Container } from "@/components/Section";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | Contact — يمن كافيه YemenCafe" },
      {
        name: "description",
        content:
          "العنوان وساعات العمل وطرق التواصل مع يمن كافيه في المكلا. Address, opening hours and contact details for YemenCafe.",
      },
      { property: "og:title", content: "تواصل معنا | Contact — YemenCafe" },
      {
        property: "og:description",
        content: "Visit YemenCafe on Main Street, Mukalla, Hadramout.",
      },
    ],
  }),
  component: ContactPage,
});

type Errors = { name?: string; email?: string; message?: string };

function ContactPage() {
  const { t } = useLang();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = t("errName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = t("errEmail");
    if (values.message.trim().length < 10) next.message = t("errMessage");
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setValues({ name: "", email: "", message: "" });
    }
  }

  const field =
    "mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-foreground/40";

  return (
    <section className="pt-12 pb-20 lg:pt-16 lg:pb-28">
      <Container>
        <p className="eyebrow">{t("contactEyebrow")}</p>
        <h1 className="mt-3 font-display text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
          {t("contactTitle")}
        </h1>
        <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{t("contactBody")}</p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-8">
            {[
              {
                Icon: MapPin,
                label: t("address"),
                lines: [t("addressValue")],
              },
              {
                Icon: Clock,
                label: t("hours"),
                lines: [
                  `${t("hours1")} · ${t("hours1Value")}`,
                  `${t("hours2")} · ${t("hours2Value")}`,
                ],
              },
              { Icon: Phone, label: t("phone"), lines: ["+967 700 000 000"], ltr: true },
              { Icon: Mail, label: t("email"), lines: ["hello@yemencafe.com"], ltr: true },
            ].map(({ Icon, label, lines, ltr }) => (
              <div key={label} className="flex gap-4 border-b border-border pb-7">
                <Icon className="mt-1 size-4 shrink-0 text-clay" />
                <div>
                  <p className="eyebrow">{label}</p>
                  {lines.map((line) => (
                    <p key={line} className="mt-1.5 text-sm" dir={ltr ? "ltr" : undefined}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <p className="eyebrow">{t("social")}</p>
              <div className="mt-4 flex gap-3">
                {[Instagram, Facebook, Music2].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={["Instagram", "Facebook", "TikTok"][i]}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-sand p-6 sm:p-10">
              <div>
                <label htmlFor="name" className="text-sm">
                  {t("formName")}
                </label>
                <input
                  id="name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  className={field}
                />
                {errors.name && <p className="mt-1.5 text-xs text-clay">{errors.name}</p>}
              </div>
              <div className="mt-5">
                <label htmlFor="email" className="text-sm">
                  {t("formEmail")}
                </label>
                <input
                  id="email"
                  type="email"
                  dir="ltr"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  className={field}
                />
                {errors.email && <p className="mt-1.5 text-xs text-clay">{errors.email}</p>}
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="text-sm">
                  {t("formMessage")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  className={`${field} resize-none`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-clay">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("formSubmit")}
              </button>
              {sent && (
                <p role="status" className="rise mt-4 text-sm text-clay">
                  {t("formSuccess")}
                </p>
              )}
            </form>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title={t("mapLabel")}
                src="https://www.openstreetmap.org/export/embed.html?bbox=49.05%2C14.50%2C49.20%2C14.58&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
