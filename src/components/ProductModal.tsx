import { useEffect } from "react";
import { X } from "lucide-react";
import { tagLabels, type MenuItem } from "@/data/menu";
import { useLang } from "@/lib/i18n";

export function ProductModal({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  const { lang, t } = useLang();

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name[lang]}
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label={t("closeAria")}
        onClick={onClose}
        className="absolute inset-0 bg-foreground/45 backdrop-blur-[3px]"
      />
      <div className="rise relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl bg-card shadow-lift sm:rounded-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label={t("closeAria")}
          className="absolute top-4 z-10 inline-flex size-9 items-center justify-center rounded-full bg-background/85 backdrop-blur-sm ltr:right-4 rtl:left-4"
        >
          <X className="size-4" />
        </button>
        <div className="grid sm:grid-cols-2">
          <img
            src={item.image}
            alt={item.name[lang]}
            loading="lazy"
            width={912}
            height={1104}
            className="h-56 w-full object-cover sm:h-full"
          />
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-[0.65rem] tracking-wide text-muted-foreground"
                >
                  {tagLabels[tag][lang]}
                </span>
              ))}
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight">{item.name[lang]}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {lang === "ar" ? item.name.en : item.name.ar}
            </p>
            <p className="mt-5 leading-relaxed text-foreground/80">{item.description[lang]}</p>

            <div className="mt-7 space-y-5 border-t border-border pt-6">
              <div>
                <p className="eyebrow">{t("ingredients")}</p>
                <p className="mt-1.5 text-sm">{item.ingredients[lang]}</p>
              </div>
              {item.dietary && (
                <div>
                  <p className="eyebrow">{t("dietary")}</p>
                  <p className="mt-1.5 text-sm">{item.dietary[lang]}</p>
                </div>
              )}
            </div>

            <p className="mt-8 font-display text-3xl text-clay" dir="ltr">
              ${item.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
