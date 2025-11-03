import { ShoppingCart } from 'lucide-react';
import { Product } from '../lib/supabase';
import { sendToWhatsApp } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

export function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const handleBuyClick = () => {
    sendToWhatsApp(product, whatsappNumber);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button
            onClick={handleBuyClick}
            disabled={!product.is_available}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
              product.is_available
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg active:scale-95'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={18} />
            {product.is_available ? 'Buy Now' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}
