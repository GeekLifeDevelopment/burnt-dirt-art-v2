export const CART_STORAGE_KEY = 'bda_cart_v1';

export const CART_EVENTS = {
  UPDATED: 'bda:cart-updated'
} as const;

export type CartItem = {
  id: string;
  sku: string;
  title: string;
  price: number;
  imageUrl?: string;
  detailUrl?: string;
  type: 'original' | 'print';
  quantity: number;
};

function sanitizeItem(raw: any): CartItem | null {
  if (!raw || typeof raw !== 'object') return null;

  const id = String(raw.id || '').trim();
  const title = String(raw.title || '').trim();
  const sku = String(raw.sku || '').trim();
  const quantity = Number(raw.quantity);
  const price = Number(raw.price);
  const type = raw.type === 'print' ? 'print' : 'original';

  if (!id || !title || !Number.isFinite(quantity) || quantity < 1 || !Number.isFinite(price) || price < 0) {
    return null;
  }

  return {
    id,
    sku,
    title,
    quantity: Math.floor(quantity),
    price,
    imageUrl: raw.imageUrl ? String(raw.imageUrl) : undefined,
    detailUrl: raw.detailUrl ? String(raw.detailUrl) : undefined,
    type
  };
}

export function readCart(): CartItem[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.map(sanitizeItem).filter(Boolean) as CartItem[];
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function dispatchCartUpdated(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CART_EVENTS.UPDATED, { detail: { count: getCartCount() } }));
}

export function addToCart(item: Omit<CartItem, 'quantity'>, quantity = 1): CartItem[] {
  const safeQuantity = Number.isFinite(quantity) && quantity > 0 ? Math.floor(quantity) : 1;
  const cart = readCart();
  const existing = cart.find((entry) => entry.id === item.id);

  if (existing) {
    if (existing.type === 'original') {
      existing.quantity = 1;
    } else {
      existing.quantity += safeQuantity;
    }
  } else {
    cart.push({ ...item, quantity: item.type === 'original' ? 1 : safeQuantity });
  }

  writeCart(cart);
  dispatchCartUpdated();
  return cart;
}

export function removeFromCart(id: string): CartItem[] {
  const cart = readCart().filter((item) => item.id !== id);
  writeCart(cart);
  dispatchCartUpdated();
  return cart;
}

export function updateCartQuantity(id: string, quantity: number): CartItem[] {
  const cart = readCart();
  const entry = cart.find((item) => item.id === id);

  if (!entry) return cart;

  const safeQuantity = Number.isFinite(quantity) ? Math.floor(quantity) : entry.quantity;
  if (safeQuantity <= 0) {
    return removeFromCart(id);
  }

  entry.quantity = entry.type === 'original' ? 1 : safeQuantity;
  writeCart(cart);
  dispatchCartUpdated();
  return cart;
}

export function clearCart(): void {
  writeCart([]);
  dispatchCartUpdated();
}

export function getCartCount(): number {
  return readCart().reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartSubtotal(): number {
  return readCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}
