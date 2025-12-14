"use client";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { filters } from "@/lib/products";

export function AdvancedFilters({ filtersState, onFilterChange }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBrandToggle = (brand) => {
    const newBrands = filtersState.brands.includes(brand)
      ? filtersState.brands.filter((b) => b !== brand)
      : [...filtersState.brands, brand];
    onFilterChange({ ...filtersState, brands: newBrands });
  };

  const handleCategoryToggle = (category) => {
    const newCategories = filtersState.categories.includes(category)
      ? filtersState.categories.filter((c) => c !== category)
      : [...filtersState.categories, category];
    onFilterChange({ ...filtersState, categories: newCategories });
  };

  const resetFilters = () => {
    onFilterChange({
      brands: [],
      categories: [],
      priceRange: [0, 5000000000],
      movements: [],
      materials: [],
      inStock: false,
      isNew: false,
      isLimited: false,
      search: "",
    });
  };

  return (
    <div className="w-full h-full rounded-2xl shadow-sm">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-5 w-5 text-primary" color="#fcfcfc"/>
            <Badge variant="secondary" className="font-normal text-gray-500">
              {Object.values(filtersState).reduce((acc, val) => {
                if (Array.isArray(val)) return acc + val.length;
                if (typeof val === "boolean" && val) return acc + 1;
                return acc;
              }, 0)}{" "}
              فیلتر فعال
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="hover:text-primary"
          >
            پاک کردن همه
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-250px)]">
        <div className="p-6 space-y-6">
          {/* جستجو */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">جستجو در محصولات</Label>
            <input
              type="text"
              placeholder="نام ساعت، برند یا ویژگی..."
              value={filtersState.search}
              onChange={(e) =>
                onFilterChange({ ...filtersState, search: e.target.value })
              }
              className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>

          {/* قیمت */}
          <Accordion type="single" collapsible defaultValue="price">
            <AccordionItem value="price">
              <AccordionTrigger className="text-sm font-medium">
                محدوده قیمت (تومان)
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <Slider
                    defaultValue={filtersState.priceRange}
                    min={0}
                    max={5000000000}
                    step={100000000}
                    onValueChange={(value) =>
                      onFilterChange({ ...filtersState, priceRange: value })
                    }
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="">از:</span>
                      <span className="font-medium">
                        {filtersState.priceRange[0].toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="">تا:</span>
                      <span className="font-medium">
                        {filtersState.priceRange[1].toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* برند */}
          <Accordion type="single" collapsible defaultValue="brands">
            <AccordionItem value="brands">
              <AccordionTrigger className="text-sm font-medium">
                برند‌ها
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {filters.brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandToggle(brand)}
                      className={`flex items-center gap-1 py-1 rounded-lg text-sm transition-all ${
                        filtersState.brands.includes(brand)
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div
                        className={`h-3 w-3 rounded border ${
                          filtersState.brands.includes(brand)
                            ? "bg-primary border-primary"
                            : "border-border"
                        }`}
                      />
                      <span className="">{brand}</span>
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* دسته‌بندی */}
          <Accordion type="single" collapsible defaultValue="categories">
            <AccordionItem value="categories">
              <AccordionTrigger className="text-sm font-medium">
                دسته‌بندی
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2 pt-2">
                  {filters.categories.map((category) => (
                    <Badge
                      key={category}
                      variant={
                        filtersState.categories.includes(category)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer px-3 py-1.5 text-sm"
                      onClick={() => handleCategoryToggle(category)}
                    >
                      {category === "luxury" && "لوکس"}
                      {category === "sports" && "ورزشی"}
                      {category === "dress" && "رسمی"}
                      {category === "digital" && "دیجیتال"}
                      {category === "smart" && "هوشمند"}
                      {category === "vintage" && "کلاسیک"}
                      {category === "limited" && "محدود"}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* سوئیچ‌ها */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="inStock"
                className="text-sm font-medium cursor-pointer"
              >
                فقط محصولات موجود
              </Label>
              <Switch
                id="inStock"
                checked={filtersState.inStock}
                onCheckedChange={(checked) =>
                  onFilterChange({ ...filtersState, inStock: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label
                htmlFor="isNew"
                className="text-sm font-medium cursor-pointer"
              >
                فقط محصولات جدید
              </Label>
              <Switch
                id="isNew"
                checked={filtersState.isNew}
                onCheckedChange={(checked) =>
                  onFilterChange({ ...filtersState, isNew: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label
                htmlFor="isLimited"
                className="text-sm font-medium cursor-pointer"
              >
                فقط مدل‌های محدود
              </Label>
              <Switch
                id="isLimited"
                checked={filtersState.isLimited}
                onCheckedChange={(checked) =>
                  onFilterChange({ ...filtersState, isLimited: checked })
                }
              />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
