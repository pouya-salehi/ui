"use client";
import { useState } from "react";
import {
  X,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  Clock,
  Check,
  ChevronLeft,
  ChevronRight,
  Zap,
  Battery,
  Droplets,
  Ruler,
  Scale,
  Calendar,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export function WatchDetailModal({ watch, open, onOpenChange }) {
  const [selectedColor, setSelectedColor] = useState(watch.colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % watch.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + watch.images.length) % watch.images.length
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-h-[80vh] overflow-hidden p-0 ">
        <div className="w-full flex flex-col lg:flex-row h-full border-none">
          {/* Image Gallery */}
          <div className="">
            <div className="relative lg:h-[80vh]">
              <img
                src={watch.image}
                alt={watch.name}
                className="object-cover h-full"
              />
            </div>

            {/* Action Buttons on Image */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isLiked ? "fill-red-500 text-red-500" : ""
                  }`}
                />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Details */}
          <ScrollArea className="lg:w-1/2 p-8 h-[calc(100vh-150px)]">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="px-3 py-1">
                    {watch.brand}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{watch.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({watch.reviewCount} نظر)
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold tracking-tight">
                  {watch.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {watch.description}
                </p>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-2xl">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold">
                        {watch.price.toLocaleString()} تومان
                      </span>
                      {watch.originalPrice && (
                        <span className="text-xl text-muted-foreground line-through">
                          {watch.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {watch.originalPrice && (
                      <Badge variant="destructive" className="mt-2">
                        {Math.round(
                          (1 - watch.price / watch.originalPrice) * 100
                        )}
                        % تخفیف
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div>موجودی: {watch.stockCount} عدد</div>
                    <Progress
                      value={(watch.stockCount / 20) * 100}
                      className="w-32 mt-1"
                    />
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <Tabs defaultValue="specs" className="w-full">
                <TabsList className="grid w-full grid-cols-3 ">
                  <TabsTrigger value="specs" className="text-gray-500">
                    مشخصات فنی
                  </TabsTrigger>
                  <TabsTrigger value="features">ویژگی‌ها</TabsTrigger>
                  <TabsTrigger value="warranty" className="text-gray-500">
                    گارانتی
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="specs" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Zap, label: "نوع حرکت", value: watch.movement },
                      {
                        icon: Droplets,
                        label: "مقاومت آب",
                        value: watch.waterResistance,
                      },
                      {
                        icon: Ruler,
                        label: "قطر",
                        value: `${watch.diameter}mm`,
                      },
                      {
                        icon: Scale,
                        label: "وزن",
                        value: `${watch.weight} گرم`,
                      },
                      {
                        icon: Battery,
                        label: "ذخیره قدرت",
                        value: watch.powerReserve,
                      },
                      {
                        icon: Calendar,
                        label: "گارانتی",
                        value: watch.warranty,
                      },
                    ].map(({ icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {label}
                          </div>
                          <div className="font-medium">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="features" className="space-y-3 pt-4">
                  {watch.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="warranty" className="pt-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Shield, title: "گارانتی اصلی", desc: "5 سال" },
                        { icon: Clock, title: "بازگشت کالا", desc: "30 روز" },
                        {
                          icon: Truck,
                          title: "ارسال رایگان",
                          desc: "سراسر کشور",
                        },
                      ].map(({ icon: Icon, title, desc }) => (
                        <div
                          key={title}
                          className="text-center p-4 border rounded-xl"
                        >
                          <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <div className="font-semibold">{title}</div>
                          <div className="text-sm text-muted-foreground">
                            {desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Action Buttons */}
              <div className="sticky bottom-0 bg-background pt-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="flex-1 h-14 text-lg gap-3">
                    <ShoppingCart className="h-5 w-5" />
                    افزودن به سبد خرید
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 h-14 text-lg gap-3"
                  >
                    <CreditCard className="h-5 w-5" />
                    خرید نقدی
                  </Button>
                  <Button size="lg" variant="secondary" className="h-14 px-6">
                    <Smartphone className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
