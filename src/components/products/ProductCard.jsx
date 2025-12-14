"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ProductCard({ watch, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group overflow-hidden  shadow-xl backdrop-blur-xl border border-white/10 transition-all rounded-3xl"
    >
      {/* Image Section With Gradient Overlay */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={watch.image}
          alt={watch.name}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/5 to-transparent" />

        {/* Floating Info */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 text-white">
          <span className="text-xs opacity-80">{watch.brand}</span>
          <h3 className="text-lg font-bold leading-tight drop-shadow-md">
            {watch.name}
          </h3>
          <p className="text-xs text-gray-300 line-clamp-2 ">{watch.description}</p>
        </div>

        {/* Floating Top Buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition">
            <Heart size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="p-2 flex items-center justify-between bg-black/80 shadow-2xl shadow-white">
        {/* Price */}
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg">
            {watch.price.toLocaleString()} تومان
          </span>
          {watch.originalPrice && (
            <span className="text-gray-300 line-through">
              {watch.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          disabled={!watch.inStock}
          className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm flex items-center gap-2 hover:bg-white/20 transition"
        >
          <ShoppingCart size={16} />
          {watch.inStock ? "خرید" : "ناموجود"}
        </motion.button>
      </div>
    </motion.div>
  );
}
