import espresso from "@/assets/espresso.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import spanishLatte from "@/assets/spanish-latte.jpg";
import icedLatte from "@/assets/iced-latte.jpg";
import coldBrew from "@/assets/cold-brew.jpg";
import croissant from "@/assets/croissant.jpg";
import avocadoToast from "@/assets/avocado-toast.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import tiramisu from "@/assets/tiramisu.jpg";
import shakshuka from "@/assets/shakshuka.jpg";
import heroCoffee from "@/assets/hero-coffee.jpg";
import type { Bilingual } from "./translations";

export type CategoryId =
  | "all"
  | "coffee"
  | "cold"
  | "breakfast"
  | "food"
  | "desserts"
  | "pastries";

export type Tag = "popular" | "new" | "featured";

export type MenuItem = {
  id: number;
  category: Exclude<CategoryId, "all">;
  name: Bilingual;
  description: Bilingual;
  ingredients: Bilingual;
  dietary?: Bilingual;
  price: number;
  image: string;
  tags: Tag[];
};

export const categories: { id: CategoryId; label: Bilingual }[] = [
  { id: "all", label: { ar: "الكل", en: "All" } },
  { id: "coffee", label: { ar: "القهوة", en: "Coffee" } },
  { id: "cold", label: { ar: "المشروبات الباردة", en: "Cold Drinks" } },
  { id: "breakfast", label: { ar: "الإفطار", en: "Breakfast" } },
  { id: "food", label: { ar: "المأكولات", en: "Food" } },
  { id: "desserts", label: { ar: "الحلويات", en: "Desserts" } },
  { id: "pastries", label: { ar: "المخبوزات", en: "Pastries" } },
];

export const tagLabels: Record<Tag, Bilingual> = {
  popular: { ar: "الأكثر طلباً", en: "Popular" },
  new: { ar: "جديد", en: "New" },
  featured: { ar: "مميز", en: "Featured" },
};

export const menu: MenuItem[] = [
  {
    id: 1,
    category: "coffee",
    name: { ar: "إسبريسو", en: "Espresso" },
    description: {
      ar: "جرعة مركّزة بطبقة كريما كثيفة ونهاية حلوة.",
      en: "A dense shot with thick crema and a sweet finish.",
    },
    ingredients: { ar: "حبوب يمنية، ماء", en: "Yemeni beans, water" },
    dietary: { ar: "نباتي · بدون حليب", en: "Vegan · Dairy-free" },
    price: 3.0,
    image: espresso,
    tags: ["popular"],
  },
  {
    id: 2,
    category: "coffee",
    name: { ar: "كابتشينو", en: "Cappuccino" },
    description: {
      ar: "إسبريسو مع الحليب المبخر ورغوة ناعمة.",
      en: "Espresso with steamed milk and a soft layer of foam.",
    },
    ingredients: { ar: "إسبريسو، حليب طازج", en: "Espresso, fresh milk" },
    dietary: { ar: "يحتوي على حليب", en: "Contains dairy" },
    price: 4.5,
    image: cappuccino,
    tags: ["popular", "featured"],
  },
  {
    id: 3,
    category: "coffee",
    name: { ar: "سبانش لاتيه", en: "Spanish Latte" },
    description: {
      ar: "إسبريسو مع الحليب المكثف المحلّى ولمسة من الفانيلا.",
      en: "Espresso with sweetened condensed milk and a touch of vanilla.",
    },
    ingredients: {
      ar: "إسبريسو، حليب، حليب مكثف، فانيلا",
      en: "Espresso, milk, condensed milk, vanilla",
    },
    dietary: { ar: "يحتوي على حليب", en: "Contains dairy" },
    price: 5.0,
    image: spanishLatte,
    tags: ["featured"],
  },
  {
    id: 4,
    category: "coffee",
    name: { ar: "موكا يمنية", en: "Yemeni Mocha" },
    description: {
      ar: "قهوة يمنية تقليدية محضّرة ببطء، بنكهة التوت والتوابل.",
      en: "Traditional Yemeni coffee brewed slowly, with berry and spice notes.",
    },
    ingredients: { ar: "حبوب موكا، هيل", en: "Mocha beans, cardamom" },
    dietary: { ar: "نباتي", en: "Vegan" },
    price: 4.75,
    image: heroCoffee,
    tags: ["new", "featured"],
  },
  {
    id: 5,
    category: "coffee",
    name: { ar: "فلات وايت", en: "Flat White" },
    description: {
      ar: "جرعتان من الإسبريسو مع حليب مخملي رقيق.",
      en: "Double espresso with thin, velvety milk.",
    },
    ingredients: { ar: "إسبريسو، حليب طازج", en: "Espresso, fresh milk" },
    dietary: { ar: "يحتوي على حليب", en: "Contains dairy" },
    price: 4.5,
    image: cappuccino,
    tags: [],
  },
  {
    id: 6,
    category: "cold",
    name: { ar: "آيس لاتيه", en: "Iced Latte" },
    description: {
      ar: "إسبريسو وحليب بارد مع الثلج.",
      en: "Espresso and chilled milk served over ice.",
    },
    ingredients: { ar: "إسبريسو، حليب بارد، ثلج", en: "Espresso, cold milk, ice" },
    dietary: { ar: "يحتوي على حليب", en: "Contains dairy" },
    price: 5.0,
    image: icedLatte,
    tags: ["popular"],
  },
  {
    id: 7,
    category: "cold",
    name: { ar: "كولد برو", en: "Cold Brew" },
    description: {
      ar: "منقوع ١٦ ساعة على البارد، صافٍ وقليل الحموضة.",
      en: "Steeped cold for 16 hours — clean and low in acidity.",
    },
    ingredients: { ar: "حبوب مطحونة خشناً، ماء بارد", en: "Coarse ground beans, cold water" },
    dietary: { ar: "نباتي · بدون حليب", en: "Vegan · Dairy-free" },
    price: 5.25,
    image: coldBrew,
    tags: ["new"],
  },
  {
    id: 8,
    category: "cold",
    name: { ar: "آيس سبانش لاتيه", en: "Iced Spanish Latte" },
    description: {
      ar: "النسخة الباردة من المفضلة لدينا، حلوة ومتوازنة.",
      en: "The cold version of our favorite — sweet and balanced.",
    },
    ingredients: {
      ar: "إسبريسو، حليب مكثف، ثلج",
      en: "Espresso, condensed milk, ice",
    },
    dietary: { ar: "يحتوي على حليب", en: "Contains dairy" },
    price: 5.5,
    image: spanishLatte,
    tags: ["popular"],
  },
  {
    id: 9,
    category: "breakfast",
    name: { ar: "شكشوكة", en: "Shakshuka" },
    description: {
      ar: "بيض مطهو في صلصة طماطم مع الأعشاب والخبز الطازج.",
      en: "Eggs baked in tomato sauce with herbs and fresh bread.",
    },
    ingredients: {
      ar: "بيض، طماطم، فلفل، أعشاب، خبز",
      en: "Eggs, tomato, peppers, herbs, bread",
    },
    dietary: { ar: "نباتي · يحتوي على بيض وغلوتين", en: "Vegetarian · Contains egg & gluten" },
    price: 8.5,
    image: shakshuka,
    tags: ["featured"],
  },
  {
    id: 10,
    category: "breakfast",
    name: { ar: "توست الأفوكادو", en: "Avocado Toast" },
    description: {
      ar: "خبز العجين المخمّر مع الأفوكادو والبيض المسلوق والأعشاب.",
      en: "Sourdough with avocado, soft egg and fresh herbs.",
    },
    ingredients: {
      ar: "خبز مخمّر، أفوكادو، بيض، ليمون",
      en: "Sourdough, avocado, egg, lemon",
    },
    dietary: { ar: "يحتوي على غلوتين وبيض", en: "Contains gluten & egg" },
    price: 7.5,
    image: avocadoToast,
    tags: ["popular"],
  },
  {
    id: 11,
    category: "food",
    name: { ar: "ساندويتش الحلومي", en: "Halloumi Sandwich" },
    description: {
      ar: "حلومي مشوي مع الطماطم والزعتر في خبز محمّص.",
      en: "Grilled halloumi with tomato and za'atar in toasted bread.",
    },
    ingredients: { ar: "حلومي، طماطم، زعتر، خبز", en: "Halloumi, tomato, za'atar, bread" },
    dietary: { ar: "نباتي · يحتوي على حليب", en: "Vegetarian · Contains dairy" },
    price: 7.0,
    image: avocadoToast,
    tags: [],
  },
  {
    id: 12,
    category: "food",
    name: { ar: "طبق الإفطار اليمني", en: "Yemeni Breakfast Plate" },
    description: {
      ar: "فول، بيض، جبن، وخبز طازج للمشاركة.",
      en: "Ful, eggs, cheese and warm bread, made to share.",
    },
    ingredients: { ar: "فول، بيض، جبن، خبز", en: "Ful beans, eggs, cheese, bread" },
    dietary: { ar: "نباتي", en: "Vegetarian" },
    price: 9.5,
    image: shakshuka,
    tags: ["featured"],
  },
  {
    id: 13,
    category: "desserts",
    name: { ar: "تشيز كيك", en: "Cheesecake" },
    description: {
      ar: "قوام كريمي على قاعدة بسكويت مع صلصة التوت.",
      en: "Creamy set on a biscuit base with berry compote.",
    },
    ingredients: { ar: "جبن كريمي، بسكويت، توت", en: "Cream cheese, biscuit, berries" },
    dietary: { ar: "يحتوي على حليب وغلوتين", en: "Contains dairy & gluten" },
    price: 6.0,
    image: cheesecake,
    tags: ["popular"],
  },
  {
    id: 14,
    category: "desserts",
    name: { ar: "تيراميسو", en: "Tiramisu" },
    description: {
      ar: "طبقات المسكربوني والقهوة مع الكاكاو.",
      en: "Layers of mascarpone and coffee, dusted with cocoa.",
    },
    ingredients: { ar: "مسكربوني، قهوة، كاكاو", en: "Mascarpone, coffee, cocoa" },
    dietary: { ar: "يحتوي على حليب وبيض", en: "Contains dairy & egg" },
    price: 6.5,
    image: tiramisu,
    tags: ["featured"],
  },
  {
    id: 15,
    category: "pastries",
    name: { ar: "كرواسون بالزبدة", en: "Butter Croissant" },
    description: {
      ar: "طبقات هشّة تُخبز كل صباح.",
      en: "Flaky layers, baked fresh every morning.",
    },
    ingredients: { ar: "دقيق، زبدة، حليب", en: "Flour, butter, milk" },
    dietary: { ar: "يحتوي على غلوتين وحليب", en: "Contains gluten & dairy" },
    price: 3.5,
    image: croissant,
    tags: ["popular"],
  },
  {
    id: 16,
    category: "pastries",
    name: { ar: "كرواسون اللوز", en: "Almond Croissant" },
    description: {
      ar: "محشو بكريمة اللوز ومغطى بالشرائح المحمصة.",
      en: "Filled with almond cream and topped with toasted flakes.",
    },
    ingredients: { ar: "دقيق، زبدة، لوز", en: "Flour, butter, almonds" },
    dietary: { ar: "يحتوي على مكسرات وغلوتين", en: "Contains nuts & gluten" },
    price: 4.25,
    image: croissant,
    tags: ["new"],
  },
];

export const featuredIds = [2, 4, 6, 10, 14, 15];
