import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Container } from "@/components/Section";
import { MenuFilter } from "@/components/MenuFilter";
import { MenuCard } from "@/components/MenuCard";
import { ProductModal } from "@/components/ProductModal";
import { menu, type CategoryId, type MenuItem } from "@/data/menu";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "القائمة | Menu — يمن كافيه YemenCafe" },
      {
        name: "description",
        content:
          "تصفح قائمة يمن كافيه: قهوة، مشروبات باردة، إفطار، حلويات ومخبوزات. Browse the YemenCafe menu.",
      },
      { property: "og:title", content: "القائمة | Menu — YemenCafe" },
      {
        property: "og:description",
        content: "Coffee, cold drinks, breakfast, desserts and pastries at YemenCafe.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t } = useLang();
  const [active, setActive] = useState<CategoryId>("all");
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const items = useMemo(
    () => (active === "all" ? menu : menu.filter((m) => m.category === active)),
    [active],
  );

  return (
    <>
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-28">
        <Container>
          <p className="eyebrow">{t("menuEyebrow")}</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
            {t("menuTitle")}
          </h1>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{t("menuBody")}</p>

          <div className="sticky top-18 z-30 -mx-5 mt-10 border-y border-border bg-background/92 px-5 py-4 backdrop-blur-md sm:mx-0 sm:rounded-full sm:border sm:px-4">
            <MenuFilter active={active} onChange={setActive} />
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            {items.length} {t("itemsCount")}
          </p>

          {items.length === 0 ? (
            <p className="py-20 text-center text-muted-foreground">{t("menuEmpty")}</p>
          ) : (
            <div
              key={active}
              className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-8"
            >
              {items.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} onSelect={setSelected} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <ProductModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
