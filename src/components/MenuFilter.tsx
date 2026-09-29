import { categories, type CategoryId } from "@/data/menu";
import { useLang } from "@/lib/i18n";

export function MenuFilter({
  active,
  onChange,
}: {
  active: CategoryId;
  onChange: (id: CategoryId) => void;
}) {
  const { lang } = useLang();

  return (
    <div className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {categories.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onChange(c.id)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors duration-200 ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/35 hover:text-foreground"
              }`}
            >
              {c.label[lang]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
