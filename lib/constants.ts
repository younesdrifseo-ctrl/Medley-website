export const RESTAURANT = {
  name: "MÉDLËY",
  fullName: "MÉDLËY by KGS FOOD",
  siret: "984 926 352 00019",
  address: {
    street: "72 route de Pontoise",
    city: "Argenteuil",
    postalCode: "95100",
    full: "72 route de Pontoise, 95100 Argenteuil",
  },
  phone: "07 64 01 65 97",
  phoneIntl: "+33764016597",
  email: "Medleyrestaurants@gmail.com",
  instagram: "@medleyrestaurant",
  instagramUrl: "https://www.instagram.com/medleyrestaurant",
  whatsapp: "https://wa.me/33764016597",
  opening: "2026-04-15T00:00:00",
  openingLabel: "15 avril 2026",
  domain: "medley-argenteuil.fr",
} as const;

export const HOURS = {
  days: "Mardi – Dimanche",
  closed: "Fermé le Lundi",
  coffeeShop: "15h – 19h",
  restaurant: "19h – 01h",
} as const;

export const CHEF = {
  name: "Mohamed Si",
  title: "Chef Cuisinier",
  achievements: [
    { year: "2014", label: "Top Chef France — Saison 5" },
    { year: "2019", label: "Top Chef Middle East" },
    { year: "2021", label: "Top Chef ME All Stars" },
    { year: "", label: "Meilleur Apprenti de France" },
    { year: "", label: "Finaliste Championnat de France Desserts" },
  ],
} as const;

export interface Cuisine {
  id: string;
  name: string;
  number: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  dishes: string[];
  color: string;
}

export const CUISINES: Cuisine[] = [
  {
    id: "orient",
    name: "Orient",
    number: "01",
    tagline: "Les saveurs du soleil",
    description: "Tajines parfumés, couscous généreux, épices douces qui voyagent du Maghreb à votre assiette.",
    icon: "/assets/icons/orient.png",
    image: "/assets/photos/tajine.jpg",
    dishes: ["Tajine d'agneau aux pruneaux", "Couscous royal", "Pastilla au poulet", "Briouates aux amandes"],
    color: "var(--gold2)",
  },
  {
    id: "asian",
    name: "Asian",
    number: "02",
    tagline: "Précision & fraîcheur",
    description: "Poke bowls colorés, bibimbap flamboyant, la précision asiatique sublimée par le Chef.",
    icon: "/assets/icons/asian.png",
    image: "/assets/photos/poke.jpg",
    dishes: ["Poke bowl saumon", "Bibimbap bœuf", "Gyozas maison", "Pad thaï crevettes"],
    color: "var(--sage)",
  },
  {
    id: "brasserie",
    name: "Brasserie",
    number: "03",
    tagline: "L'art de la viande",
    description: "Viandes maturées, classiques français revisités, le savoir-faire brasserie dans toute sa noblesse.",
    icon: "/assets/icons/brasserie.png",
    image: "/assets/photos/boeuf.jpg",
    dishes: ["Côte de bœuf maturée", "Canard confit", "Tartare de bœuf", "Entrecôte sauce béarnaise"],
    color: "var(--forest)",
  },
  {
    id: "italy",
    name: "Italy",
    number: "04",
    tagline: "La dolce vita",
    description: "Pizzas napolitaines au feu de bois, pastas fraîches du jour, l'Italie authentique.",
    icon: "/assets/icons/italy.png",
    image: "/assets/photos/pizza.jpg",
    dishes: ["Pizza Margherita DOP", "Ravioli ricotta-épinards", "Risotto truffe", "Tiramisu maison"],
    color: "var(--olive)",
  },
];

export const GALLERY_IMAGES = [
  { src: "/assets/photos/salle.jpg", alt: "Grande salle MÉDLËY" },
  { src: "/assets/photos/ambiance.jpg", alt: "Ambiance MÉDLËY" },
  { src: "/assets/photos/bar.jpg", alt: "Bar MÉDLËY" },
  { src: "/assets/photos/neon.jpg", alt: "Néon Mohamed Si" },
  { src: "/assets/photos/sign.jpg", alt: "Entrée MÉDLËY" },
  { src: "/assets/photos/boeuf.jpg", alt: "Côte de bœuf" },
  { src: "/assets/photos/canard.jpg", alt: "Canard confit" },
  { src: "/assets/photos/ravioli.jpg", alt: "Ravioli maison" },
  { src: "/assets/photos/bibimbap.jpg", alt: "Bibimbap" },
];

export const NAV_LINKS = [
  { label: "Cuisines", href: "#cuisines" },
  { label: "Galerie", href: "#galerie" },
  { label: "Le Chef", href: "#chef" },
  { label: "Réserver", href: "#reservation" },
  { label: "Infos", href: "#infos" },
];
