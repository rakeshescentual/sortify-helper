
import { Product } from '../SortableItem';

// Sample product data with trending and discount information
export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "La Roche-Posay Anthelios UVMUNE 400 Invisible Fluid SPF50+ 50ml",
    price: 20.00,
    image: "https://images.escentual.com/img/215x250/93/1718202105_anthelios_uvmune_400_invisible_fluid_spf50_50ml_001.jpg",
    brand: "La Roche-Posay",
    rating: 4.7,
    ratingCount: 234,
    date: "2023-09-15",
    tag: "Bestseller",
    trendingScore: 85,
    trendingTikTok: 92,
    trendingYouTube: 75,
    trendingInstagram: 80,
    discount: 0.05,
    isBestseller: true,
    lastViewed: "2024-07-05T10:23:00Z"
  },
  {
    id: "2",
    name: "Avène Cleanance Comedomed Anti-Blemish Concentrate 30ml",
    price: 18.50,
    image: "https://images.escentual.com/img/215x250/98/1719904471_avene_cleanance_comedomed_anti-blemish_concentrate_30ml_1.jpg",
    brand: "Avène",
    rating: 4.2,
    ratingCount: 156,
    date: "2023-11-20",
    discount: 0.15,
    trendingScore: 65,
    trendingTikTok: 88,
    trendingYouTube: 45,
    trendingInstagram: 62,
    isBestseller: false,
    lastViewed: "2024-07-01T14:45:00Z"
  },
  {
    id: "3",
    name: "Vichy Normaderm Phytosolution Double-Correction Daily Care 50ml",
    price: 24.00,
    image: "https://images.escentual.com/img/215x250/89/1585928339_vichy_normaderm_phytosolution_double-correction_daily_care_50ml_001.jpg",
    brand: "Vichy",
    rating: 4.5,
    ratingCount: 189,
    date: "2024-01-05",
    trendingScore: 78,
    trendingTikTok: 70,
    trendingYouTube: 82,
    trendingInstagram: 75,
    discount: 0.10,
    isBestseller: true,
    lastViewed: "2024-07-04T09:15:00Z"
  },
  {
    id: "4",
    name: "Bioderma Sensibio H2O Micellar Water 500ml",
    price: 16.99,
    image: "https://images.escentual.com/img/215x250/63/1608298963-bioderma-sensibio-h2o-micellar-water-500ml-001.jpg",
    brand: "Bioderma",
    rating: 4.9,
    ratingCount: 456,
    date: "2023-08-10",
    tag: "Popular",
    trendingScore: 95,
    trendingTikTok: 96,
    trendingYouTube: 90,
    trendingInstagram: 98,
    discount: 0,
    isBestseller: true,
    lastViewed: "2024-07-06T15:30:00Z"
  },
  {
    id: "5",
    name: "Caudalie Vinoperfect Radiance Serum 30ml",
    price: 49.00,
    image: "https://images.escentual.com/img/215x250/57/1623400057-caudalie-vinoperfect-radiance-serum-30ml-001.jpg",
    brand: "Caudalie",
    rating: 4.6,
    ratingCount: 210,
    date: "2023-12-12",
    discount: 0.20,
    trendingScore: 72,
    trendingTikTok: 65,
    trendingYouTube: 79,
    trendingInstagram: 73,
    isBestseller: false,
    lastViewed: "2024-07-02T11:20:00Z"
  },
  {
    id: "6",
    name: "Embryolisse Lait-Crème Concentré 75ml",
    price: 20.00,
    image: "https://images.escentual.com/img/215x250/23/1683277923-embryolisse-lait-creme-concentre-75ml-2023-001.jpg",
    brand: "Embryolisse",
    rating: 4.4,
    ratingCount: 178,
    date: "2023-10-05",
    trendingScore: 68,
    trendingTikTok: 75,
    trendingYouTube: 60,
    trendingInstagram: 70,
    discount: 0.08,
    isBestseller: false,
    lastViewed: "2024-07-03T16:45:00Z"
  },
  {
    id: "7",
    name: "Nuxe Huile Prodigieuse Multi-Purpose Dry Oil 100ml",
    price: 29.50,
    image: "https://images.escentual.com/img/215x250/90/1588855790-nuxe-huile-prodigieuse-multi-purpose-dry-oil-100ml-2019-001.jpg",
    brand: "Nuxe",
    rating: 4.8,
    ratingCount: 324,
    date: "2023-07-15",
    tag: "New",
    trendingScore: 87,
    trendingTikTok: 90,
    trendingYouTube: 80,
    trendingInstagram: 89,
    discount: 0.12,
    isBestseller: true,
    lastViewed: "2024-07-06T08:10:00Z"
  },
  {
    id: "8",
    name: "CeraVe Moisturising Lotion 236ml",
    price: 12.50,
    image: "https://images.escentual.com/img/215x250/67/1627989167-cerave-moisturising-lotion-236ml-001.jpg",
    brand: "CeraVe",
    rating: 4.7,
    ratingCount: 289,
    date: "2024-02-01",
    discount: 0.10,
    trendingScore: 90,
    trendingTikTok: 94,
    trendingYouTube: 85,
    trendingInstagram: 86,
    isBestseller: true,
    lastViewed: "2024-07-05T20:05:00Z"
  }
];

// Sort products based on the selected option
export const getSortedProducts = (sortValue: string, products = SAMPLE_PRODUCTS) => {
  let sortedProducts = [...products];
  
  switch (sortValue) {
    case 'price-asc':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      sortedProducts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      break;
    case 'rating-desc':
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'popularity-desc':
      sortedProducts.sort((a, b) => b.ratingCount - a.ratingCount);
      break;
    case 'trending':
      sortedProducts.sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));
      break;
    case 'trending-tiktok':
      sortedProducts.sort((a, b) => (b.trendingTikTok || 0) - (a.trendingTikTok || 0));
      break;
    case 'trending-youtube':
      sortedProducts.sort((a, b) => (b.trendingYouTube || 0) - (a.trendingYouTube || 0));
      break;
    case 'trending-instagram':
      sortedProducts.sort((a, b) => (b.trendingInstagram || 0) - (a.trendingInstagram || 0));
      break;
    case 'discount-desc':
      sortedProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0));
      break;
    case 'bestseller':
      sortedProducts.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
      break;
    case 'recently-viewed':
      sortedProducts.sort((a, b) => new Date(b.lastViewed || '').getTime() - new Date(a.lastViewed || '').getTime());
      break;
    // 'featured' is the default case, no sorting needed
  }
  
  return sortedProducts;
};
