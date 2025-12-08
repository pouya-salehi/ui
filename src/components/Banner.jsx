"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
  Zap,
  Shield,
  Watch,
  Navigation,
  Clock,
  Crown,
  Star,
  TrendingUp,
  ShoppingBag,
  Heart,
  Share2,
  Menu,
  X,
  Home,
  Info,
  Gem,
  Award,
  CheckCircle,
  Battery,
  Droplets,
  ShieldCheck,
} from "lucide-react";

const LuxuryWatchBanner2026 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const watches = [
    {
      id: 1,
      name: "Rolex Daytona",
      model: "Cosmograph",
      price: "$85,000",
      originalPrice: "$95,000",
      discount: "11%",
      description:
        "ترکیبی از هنر ساعت‌سازی سوئیسی با تکنولوژی کوانتومی. دقت بی‌نظیر در هر ثانیه.",
      material: "تیتانیوم AeroGrade + سرامیک نانو",
      movement: "کوانتوم کرونومتر کالیبر QX-2026",
      powerReserve: "شارژ دائمی خورشیدی",
      rating: 5.0,
      image: "/images/1.png",
      color: "#00D4FF",
      accentColor: "#FF00FF",
      bgGradient: "from-cyan-900/30 via-black to-purple-900/30",
    },
    {
      id: 2,
      name: "Patek Philippe",
      model: "Nautilus",
      price: "$120,000",
      originalPrice: "$135,000",
      discount: "12%",
      description: "ساعت نجومی با نمایش کهکشان راه‌شیری. هر لحظه تماشای کیهان.",
      material: "پلاتینیم کیهانی + شهاب‌سنگ",
      movement: "آسترونومیکال مووتمنت AX-2026",
      powerReserve: "۲ سال باتری اتمی",
      rating: 4.9,
      image: "/images/2.png",
      color: "#9D00FF",
      accentColor: "#00FF9D",
      bgGradient: "from-purple-900/30 via-black to-emerald-900/30",
    },
    {
      id: 3,
      name: "Audemars Piguet",
      model: "Royal Oak",
      price: "$95,000",
      originalPrice: "$110,000",
      discount: "14%",
      description:
        "اولین ساعت هولوگرافیک جهان. نمایش اطلاعات در هوا بدون تماس.",
      features: [
        {
          icon: <Sparkles />,
          title: "نمایشگر هولوگرام",
          desc: "نمایش سه‌بعدی در هوا",
        },
        { icon: <Shield />, title: "بدون تماس", desc: "کنترل ژست‌های حرکتی" },
        { icon: <Award />, title: "AI همیار", desc: "دستیار هوشمند یکپارچه" },
        {
          icon: <Zap />,
          title: "شارژ لیزری",
          desc: "شارژ بی‌سیم از فاصله ۵ متری",
        },
      ],
      material: "کربن تک‌اتمی + شیشه گوریلا",
      movement: "هولوگرافیک مووتمنت HX-2026",
      powerReserve: "۷۲ ساعت + شارژ سریع",
      rating: 4.8,
      image: "/images/3.png",
      color: "#FF6B00",
      accentColor: "#00D4FF",
      bgGradient: "from-orange-900/30 via-black to-cyan-900/30",
    },
    {
      id: 4,
      name: "Richard Mille",
      model: "RM 011",
      price: "$150,000",
      originalPrice: "$175,000",
      discount: "15%",
      description: "کاملاً شفاف با موتور قابل مشاهده. هنر مهندسی در معرض دید.",
      material: "کریستال سافایر + تیتانیوم شفاف",
      movement: "ترنسپرنت مووتمنت TX-2026",
      powerReserve: "۱۲ روز ذخیره انرژی",
      rating: 5.0,
      image: "/images/4.png",
      color: "#FFFFFF",
      accentColor: "#00FF87",
      bgGradient: "from-gray-900/30 via-black to-emerald-900/30",
    },
    {
      id: 5,
      name: "Hublot",
      model: "Big Bang",
      price: "$200,000",
      originalPrice: "$250,000",
      discount: "20%",
      description: "ساعت نسبیتی با نمایش انحنای زمان. تجربه فیزیک در مچ دست.",
      material: "اوسمیوم + عناصر نادر",
      movement: "رلاتیویتی مووتمنت RX-2026",
      powerReserve: "نامحدود (نظری)",
      rating: 5.0,
      image: "/images/5.png",
      color: "#FF00FF",
      accentColor: "#FFFF00",
      bgGradient: "from-pink-900/30 via-black to-yellow-900/30",
    },
  ];

  // Navigation
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % watches.length);
        setActiveFeature(0);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, watches.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % watches.length);
    setActiveFeature(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + watches.length) % watches.length);
    setActiveFeature(0);
  };

  const currentWatch = watches[currentIndex];

  // Animation Variants 2026
  const watchEntrance = {
    hidden: {
      scale: 0.7,
      opacity: 0,
      rotateY: -90,
      filter: "blur(15px)",
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1,
        duration: 0.8,
      },
    },
    exit: {
      scale: 0.7,
      opacity: 0,
      rotateY: 90,
      filter: "blur(15px)",
      transition: {
        duration: 0.5,
      },
    },
  };

  const detailsLeft = {
    hidden: {
      x: 150,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
        delay: 0.3,
      },
    },
  };

  const detailsRight = {
    hidden: {
      x: -150,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
        delay: 0.5,
      },
    },
  };

  const fogShadow = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.1, 0.25, 0.1],
      y: [0, 15, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const navDot = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <div
      className="relative h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navbar 2026 */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-50 p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2,
        }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6">
            {["خانه", "درباره ما", "مجموعه‌ها", "فناوری", "گارانتی"].map(
              (item, idx) => (
                <motion.a
                  key={item}
                  href="#"
                  className="relative text-white hover:text-white font-medium px-1 py-2 overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10">{item}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.a>
              )
            )}
          </div>
        </div>
      </motion.nav>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-12">
            {/* Left Column - Details */}
            <motion.div
              key={`left-${currentWatch.id}`}
              variants={detailsLeft}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-6 lg:space-y-8"
            >
              {/* Watch Name & Model */}

              {/* Description */}
              <motion.p
                className="text-gray-300 text-base lg:text-lg leading-relaxed"
                whileHover={{ x: 5 }}
              >
                {currentWatch.description}
              </motion.p>

              {/* Material & Movement */}
              <div className="space-y-4">
                <motion.div
                  className="p-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-gray-400 text-sm mb-2">جنس و مواد</div>
                  <div className="text-white font-medium">
                    {currentWatch.material}
                  </div>
                </motion.div>

                <motion.div
                  className="p-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-gray-400 text-sm mb-2">موتور و حرکت</div>
                  <div className="text-white font-medium">
                    {currentWatch.movement}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Center Column - Watch Display */}
            <div className="relative flex justify-center items-center">
              {/* Fog Shadow Effect */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                style={{
                  width: "400px",
                  height: "100px",
                  background: `radial-gradient(ellipse, ${currentWatch.color}15, transparent 70%)`,
                  filter: "blur(40px)",
                }}
                animate={fogShadow.animate}
                transition={fogShadow.transition}
              />

              {/* Glowing Ring */}
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background: `radial-gradient(circle, ${currentWatch.color}10, transparent 70%)`,
                  filter: "blur(30px)",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Watch Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWatch.id}
                  variants={watchEntrance}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative z-20"
                >
                  <img
                    src={currentWatch.image}
                    alt={currentWatch.name}
                    className="h-100 object-cover drop-shadow-[0_0_60px_rgba(255,255,255,0.5)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Features & Price */}
            <motion.div
              key={`right-${currentWatch.id}`}
              variants={detailsRight}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-6 lg:space-y-8"
            >
              {/* Price & Actions */}
              <motion.div
                className="p-8 text-center bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="space-y-4">
                  <div>
                    <motion.h1
                      className="text-3xl lg:text-4xl font-bold text-white mb-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {currentWatch.name}
                    </motion.h1>
                    <motion.h2
                      className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0%", "100%", "0%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      style={{ backgroundSize: "200% auto" }}
                    >
                      {currentWatch.model}
                    </motion.h2>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-4 text-right">
                      قیمت ویژه ۲۰۲۶:
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-baseline gap-3 lg:gap-4">
                      <div className="text-2xl lg:text-3xl font-bold text-white">
                        {currentWatch.price}
                      </div>
                      <div className="text-lg lg:text-xl text-gray-400 line-through">
                        {currentWatch.originalPrice}
                      </div>
                      <div className="px-3 py-1 bg-gradient-to-br from-white/30 to-transparent text-white rounded-lg font-bold text-sm inline-block w-fit">
                        {currentWatch.discount} تخفیف
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.button
                      className="
    flex-1 
    text-white 
    py-3 
    rounded-xl 
    font-bold 
    flex items-center justify-center gap-2 
    text-sm lg:text-base
    relative overflow-hidden

    /* GLASS EFFECT */
    backdrop-blur-xl 
    bg-white/10 
    border border-white/20 
    shadow-[0_0_20px_rgba(255,255,255,0.08)]

    transition-all duration-500
  "
                      whileHover={{
                        scale: 1.07,
                        y: -2,
                        boxShadow: "0px 10px 35px rgba(255,255,255,0.25)",
                      }}
                      whileTap={{ scale: 0.94 }}
                    >
                      {/* Fog Layer */}
                      <div className="absolute inset-0 bg-white/5 blur-2xl opacity-20" />
                      {/* Glow on Hover */}
                      <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                      <ShoppingBag
                        size={16}
                        className="text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]"
                      />
                      خرید آنی
                    </motion.button>

                    <div className="flex items-center gap-2">
                      <motion.button
                        className="p-3 bg-white/10 rounded-xl"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className="text-white" size={16} />
                      </motion.button>

                      <motion.button
                        className="p-3 bg-white/10 rounded-xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 className="text-white" size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Control Panel 2026 */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-2xl">
          <motion.button
            onClick={prevSlide}
            className="p-2 hover:bg-white/10 rounded-full"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="text-white" size={20} />
          </motion.button>

          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 hover:bg-white/10 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? (
              <Pause className="text-white" size={18} />
            ) : (
              <Play className="text-white" size={18} />
            )}
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="p-2 hover:bg-white/10 rounded-full"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="text-white" size={20} />
          </motion.button>

          <div className="h-4 w-px bg-white/30 mx-1" />

          <div className="text-xs text-white font-medium px-2">
            <span className="text-cyan-400">{currentIndex + 1}</span>
            <span className="text-gray-400"> / </span>
            <span>{watches.length}</span>
          </div>
        </div>
      </motion.div>

      {/* Background Tech Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              background: currentWatch.color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, -160],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LuxuryWatchBanner2026;
