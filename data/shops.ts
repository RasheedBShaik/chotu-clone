export interface Product {
  id: string;
  shopId: string;
  name: string;
  price: number;
  weight: string;
  img: string;
  tag: string;
  inStock: boolean;
}

export interface Shop {
  id: string;
  name: string;
  category: 'pharmacy' | 'ayurvedic' | 'grocery' | 'dental' | 'wellness';
  img: string;
  address: string;
  rating: string;
  distance: string;
  isOpen: boolean;
}

export const ALL_SHOPS: Shop[] = [
  // --- PHARMACY (8 Shops) ---
  { id: "p1", name: "MedPlus Pharmacy", category: "pharmacy", img: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=400", address: "Sector 12", rating: "4.8", distance: "0.4 km", isOpen: true },
  { id: "p2", name: "Wellness Forever", category: "pharmacy", img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400", address: "Oak Ridge", rating: "4.5", distance: "1.2 km", isOpen: true },
  { id: "p3", name: "Apollo Pharmacy", category: "pharmacy", img: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400", address: "Main St", rating: "4.7", distance: "0.8 km", isOpen: true },
  { id: "p4", name: "Dhani Pharmacy", category: "pharmacy", img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400", address: "Link Rd", rating: "4.2", distance: "2.1 km", isOpen: true },
  { id: "p5", name: "Netmeds Store", category: "pharmacy", img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400", address: "Station Rd", rating: "4.4", distance: "1.5 km", isOpen: true },
  { id: "p6", name: "Noble Plus", category: "pharmacy", img: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400", address: "City Center", rating: "4.0", distance: "3.2 km", isOpen: true },
  { id: "p7", name: "Frank Ross Health", category: "pharmacy", img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400", address: "Park Plaza", rating: "4.6", distance: "0.9 km", isOpen: true },

  // --- GROCERY (8 Shops) ---
  { id: "g1", name: "Sai General Store", category: "grocery", img: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400", address: "Street 4", rating: "3.9", distance: "0.8 km", isOpen: true },
  { id: "g2", name: "Reliance Fresh", category: "grocery", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400", address: "Mall View", rating: "4.6", distance: "1.9 km", isOpen: true },
  { id: "g3", name: "Nature's Basket", category: "grocery", img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400", address: "High St", rating: "4.8", distance: "2.5 km", isOpen: true },
  { id: "g4", name: "DMart Ready", category: "grocery", img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400", address: "Old Town", rating: "4.3", distance: "4.1 km", isOpen: true },
  { id: "g6", name: "Blinkit Darkstore", category: "grocery", img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400", address: "Back Rd", rating: "3.8", distance: "0.5 km", isOpen: true },
  { id: "g7", name: "Star Bazaar", category: "grocery", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=400", address: "North End", rating: "4.1", distance: "2.2 km", isOpen: true },
  { id: "g8", name: "BigBasket Now", category: "grocery", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400", address: "Hub Area", rating: "4.5", distance: "0.3 km", isOpen: true },

  // --- AYURVEDIC (8 Shops) ---
  { id: "a1", name: "Patanjali Chikitsalaya", category: "ayurvedic", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400", address: "Avenue 5", rating: "4.5", distance: "1.4 km", isOpen: true },
  { id: "a2", name: "Himalaya Wellness", category: "ayurvedic", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400", address: "West End", rating: "4.0", distance: "3.5 km", isOpen: true },
  { id: "a3", name: "Dabur Shop", category: "ayurvedic", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400", address: "Yoga Ln", rating: "4.6", distance: "1.1 km", isOpen: true },
  { id: "a4", name: "Baidyanath Bhawan", category: "ayurvedic", img: "https://images.unsplash.com/photo-1564277287253-934c868e54ea?w=400", address: "Fort", rating: "4.2", distance: "2.8 km", isOpen: true },
  { id: "a5", name: "Forest Essentials", category: "ayurvedic", img: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=400", address: "Luxury Wing", rating: "4.9", distance: "5.2 km", isOpen: true },
  { id: "a6", name: "Kama Ayurveda", category: "ayurvedic", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400", address: "Terminal 2", rating: "4.7", distance: "6.0 km", isOpen: true },
  { id: "a7", name: "Organic India", category: "ayurvedic", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400", address: "Green Rd", rating: "4.4", distance: "1.3 km", isOpen: true },
  { id: "a8", name: "Sri Sri Tattva", category: "ayurvedic", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400", address: "Ashram Rd", rating: "4.5", distance: "0.2 km", isOpen: true },
  
  // Note: Add similar 8 shops for wellness and dental...
];

export const ALL_PRODUCTS: Product[] = [
  // --- MEDPLUS PRODUCTS ---
  { id: "p1_1", shopId: "p1", name: "Dolo 650", price: 32, weight: "15 tabs", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", tag: "Fever", inStock: true },
  { id: "p1_2", shopId: "p1", name: "Vicks Vaporub", price: 95, weight: "25ml", img: "https://images.unsplash.com/photo-1559564484-e484c10fc401?w=400", tag: "Cold", inStock: true },
  { id: "p1_3", shopId: "p1", name: "Saridon", price: 40, weight: "10 tabs", img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400", tag: "Headache", inStock: true },

  // --- APOLLO PHARMACY PRODUCTS ---
  { id: "p3_1", shopId: "p3", name: "Combiflam", price: 45, weight: "20 tabs", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400", tag: "Pain", inStock: true },
  { id: "p3_2", shopId: "p3", name: "N95 Mask", price: 150, weight: "1 pc", img: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=400", tag: "Safety", inStock: true },
  { id: "p3_3", shopId: "p3", name: "Electral Powder", price: 20, weight: "21g", img: "https://images.unsplash.com/photo-1559564484-e484c10fc401?w=400", tag: "Energy", inStock: true },

  // --- SAI GENERAL STORE PRODUCTS ---
  { id: "g1_1", shopId: "g1", name: "Amul Gold Milk", price: 33, weight: "500ml", img: "https://images.unsplash.com/photo-1550583724-125581cc254b?w=400", tag: "Dairy", inStock: true },
  { id: "g1_2", shopId: "g1", name: "Parle-G Biscuit", price: 10, weight: "200g", img: "https://images.unsplash.com/photo-1590005354167-6da97870c91d?w=400", tag: "Snack", inStock: true },
];

