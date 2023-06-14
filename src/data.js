import { Tour1, Tour2, Tour3, Tour4, Tour5, Tour6 } from "./images/Images";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  {
    id: 2,
    href: "https://github.com/Kitsuneei/backroads-app",
    icon: "fab fa-github",
  },
  { id: 3, href: "https://www.youtube.com", icon: "fab fa-youtube" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: Tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Embark on a thrilling Tibet adventure, where ancient traditions and awe-inspiring landscapes await. Discover sacred monasteries, vibrant markets, and the warm hospitality of the locals. Immerse yourself in the mystique of the Himalayas and create lasting memories of this extraordinary journey through Tibet.",
    country: "china",
    days: 6,
    price: 2100,
  },

  {
    id: 2,
    image: Tour2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Discover the best of Java's enchanting blend of adventure and culture. Uncover ancient temples, lush rainforests, and stunning beaches. Immerse yourself in vibrant cities, savor local cuisine, and witness breathtaking landscapes. Java invites you to experience a captivating journey of diverse wonders and unforgettable moments.",
    country: "indonesia",
    days: 11,
    price: 1400,
  },

  {
    id: 3,
    image: Tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Unleash the allure of Hong Kong's vibrant cityscape. Dive into a world where East meets West, indulge in delectable cuisines, and soak in the breathtaking views from Victoria Peak. Explore the bustling markets, immerse yourself in local culture, and discover the enchantment of Hong Kong.",
    country: "hong kong",
    days: 15,
    price: 3200,
  },

  {
    id: 4,
    image: Tour4,
    date: "november 10th, 2020",
    title: "kenya highlights",
    text: "Experience the essence of Kenya's beauty and culture. Encounter magnificent wildlife in the Maasai Mara, immerse yourself in indigenous traditions, and discover stunning landscapes from mountains to pristine beaches. Kenya's highlights await, promising a journey of wonder and inspiration.",
    country: "kenya",
    days: 10,
    price: 1800,
  },

  {
    id: 5,
    image: Tour5,
    date: "december 20th, 2020",
    title: "safari adventure",
    text: "Unleash your spirit of adventure on a thrilling safari in South America. Explore the exotic wonders of the Amazon rainforest, encounter majestic wildlife, and immerse yourself in vibrant local cultures. Prepare for an unforgettable journey that will ignite your senses and create lasting memories.",
    country: "south africa",
    days: 8,
    price: 1900,
  },

  {
    id: 6,
    image: Tour6,
    date: "january 5th, 2021",
    title: "taj mahal tour",
    text: "Experience the magical allure of the Taj Mahal, a symbol of eternal love. Marvel at its exquisite beauty, immerse yourself in its captivating history, and let its grandeur leave you in awe. A Taj Mahal tour awaits, promising an unforgettable journey of wonder and enchantment.",
    country: "india",
    days: 12,
    price: 2400,
  },
];
