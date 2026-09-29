import { tagLabels, type MenuItem } from "@/data/menu";
import { useLang } from "@/lib/i18n";

export function MenuCard({
  item,
  index = 0,
  onSelect,
}: {
  item: MenuItem;
  index?: number;
  onSelect: (item: MenuItem) => void;
}) {
  const { lang } = useLang();

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="rise group block w-full text-start"
      style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl bg-secondary">
        <img
          src={item.image}
          alt={item.name[lang]}
          loading="lazy"
          width={912}
          height={1104}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {item.tags[0] && (
          <span className="absolute top-3 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] tracking-wide backdrop-blur-sm ltr:left-3 rtl:right-3">
            {tagLabels[item.tags[0]][lang]}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl leading-tight">{item.name[lang]}</h3>
        <span className="shrink-0 text-sm text-clay tabular-nums" dir="ltr">
          ${item.price.toFixed(2)}
        </span>
      </div>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {item.description[lang]}
      </p>
    </button>
  );
}
