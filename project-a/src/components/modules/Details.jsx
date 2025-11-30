import { Star, Ruler, DollarSign, Globe ,ShoppingCart, Bookmark} from "lucide-react";
import { sp } from "@/helper/replaceNumber";
function Details() {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 gap-3 bg-gradient-to-t from-black/40 to-black/10 shadow-black/10 shadow text-white">
      <h1>کت و شلوار یقه ناچ دراپ مشکی</h1>
      <h3 className="font-extralight text-xs">کت و شلوار رسمی و فرمال</h3>
      <div className="flex items-center justify-between gap-2">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <div className="flex items-center gap-2">
            <img src="./images/star.png" className="h-4" />
            <span>4.8</span>
          </div>
          <span className="text-xs font-light">رتبه در سایت</span>
        </div>
        <span className="w-0.5 h-10 bg-white/40 rounded-lg"></span>
        <div className="text-center flex flex-col justify-center items-center  gap-2">
          <div className="flex items-center gap-2">
            <DollarSign />
            <span>{sp(6990000)}</span>
          </div>
          <span className="text-xs font-light">تومان</span>
        </div>
        <span className="w-0.5 h-10 bg-white/40 rounded-lg"></span>
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <Globe />
          <span className="text-xs font-light">ساخت ایران</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center bg-white text-center justify-center gap-4 p-3 rounded-md text-gray-500 w-full">
        اضافه به سبد خرید
        <ShoppingCart />
      </button>
      <button className="p-3 bg-black/20 rounded-md">
        <Bookmark />
      </button>
      </div>
    </div>
  );
}

export default Details;
