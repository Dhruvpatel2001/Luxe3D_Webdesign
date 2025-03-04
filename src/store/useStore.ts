import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  wishlist: number[];
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find((i) => i.id === item.id);
    
    if (existingItem) {
      return {
        cart: state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    }
    
    return {
      cart: [...state.cart, { ...item, quantity: 1 }],
    };
  }),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ),
  })),
  clearCart: () => set({ cart: [] }),
  wishlist: [],
  addToWishlist: (id) => set((state) => ({
    wishlist: state.wishlist.includes(id) 
      ? state.wishlist 
      : [...state.wishlist, id],
  })),
  removeFromWishlist: (id) => set((state) => ({
    wishlist: state.wishlist.filter((itemId) => itemId !== id),
  })),
}));