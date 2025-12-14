"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Sparkles,
  Zap,
  Rocket,
  Target,
} from "lucide-react";

const StepTracker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const [formData, setFormData] = useState({
    howFindUs: "",
    interactionType: "",
    experienceLevel: "",
    preferredPlatform: "",
  });

  const steps = [
    {
      title: "آشنایی",
      question: "چطور با پلتفرم ما آشنا شدید؟",
      icon: <Sparkles className="w-5 h-5" />,
      options: [
        {
          value: "instagram",
          label: "اینستاگرام",
          icon: "📱",
          color: "from-pink-500 to-rose-500",
        },
        {
          value: "ai",
          label: "هوش مصنوعی",
          icon: "🤖",
          color: "from-purple-500 to-indigo-500",
        },
        {
          value: "friend",
          label: "معرفی دوستان",
          icon: "👥",
          color: "from-blue-500 to-cyan-500",
        },
        {
          value: "search",
          label: "جستجوی گوگل",
          icon: "🔍",
          color: "from-green-500 to-emerald-500",
        },
        {
          value: "ads",
          label: "تبلیغات آنلاین",
          icon: "🎯",
          color: "from-orange-500 to-red-500",
        },
        {
          value: "event",
          label: "رویدادها",
          icon: "🎪",
          color: "from-yellow-500 to-amber-500",
        },
      ],
      field: "howFindUs",
      description: "کشف کنید که چطور جامعه ما را پیدا کردید",
    },
    {
      title: "تعامل",
      question: "هدف اصلی شما از همکاری چیست؟",
      icon: <Target className="w-5 h-5" />,
      options: [
        {
          value: "freelance",
          label: "فریلنسری حرفه‌ای",
          icon: "💼",
          color: "from-indigo-500 to-blue-500",
        },
        {
          value: "fulltime",
          label: "همکاری تمام‌وقت",
          icon: "⚡",
          color: "from-emerald-500 to-green-500",
        },
        {
          value: "learning",
          label: "یادگیری پیشرفته",
          icon: "🎓",
          color: "from-purple-500 to-pink-500",
        },
        {
          value: "networking",
          label: "شبکه‌سازی حرفه‌ای",
          icon: "🌐",
          color: "from-cyan-500 to-blue-500",
        },
        {
          value: "investment",
          label: "سرمایه‌گذاری",
          icon: "💰",
          color: "from-amber-500 to-yellow-500",
        },
      ],
      field: "interactionType",
      description: "هدف خود را از حضور در پلتفرم مشخص کنید",
    },
    {
      title: "تجربه",
      question: "سطح تخصص شما در چه حدی است؟",
      icon: <Zap className="w-5 h-5" />,
      options: [
        {
          value: "beginner",
          label: "تازه‌کار (1-2 سال)",
          icon: "🚀",
          color: "from-blue-500 to-cyan-500",
        },
        {
          value: "intermediate",
          label: "متوسط (3-5 سال)",
          icon: "⚡",
          color: "from-green-500 to-emerald-500",
        },
        {
          value: "advanced",
          label: "حرفه‌ای (5+ سال)",
          icon: "🎯",
          color: "from-purple-500 to-indigo-500",
        },
        {
          value: "expert",
          label: "کارشناس ارشد",
          icon: "💎",
          color: "from-rose-500 to-pink-500",
        },
      ],
      field: "experienceLevel",
      description: "سطح تجربه خود را برای شخصی‌سازی تجربه انتخاب کنید",
    },
    {
      title: "پلتفرم",
      question: "ترجیح کاری شما بر روی کدام پلتفرم است؟",
      icon: <Rocket className="w-5 h-5" />,
      options: [
        {
          value: "web",
          label: "توسعه وب",
          icon: "🌐",
          color: "from-violet-500 to-purple-500",
        },
        {
          value: "mobile",
          label: "توسعه موبایل",
          icon: "📱",
          color: "from-sky-500 to-blue-500",
        },
        {
          value: "desktop",
          label: "دسکتاپ",
          icon: "🖥️",
          color: "from-emerald-500 to-teal-500",
        },
        {
          value: "ai",
          label: "هوش مصنوعی",
          icon: "🧠",
          color: "from-orange-500 to-amber-500",
        },
        {
          value: "cloud",
          label: "کلود و دیتا",
          icon: "☁️",
          color: "from-indigo-500 to-blue-500",
        },
        {
          value: "fullstack",
          label: "فول‌استک",
          icon: "🎪",
          color: "from-rose-500 to-pink-500",
        },
      ],
      field: "preferredPlatform",
      description: "حوزه تخصصی مورد علاقه خود را انتخاب نمایید",
    },
  ];

  // انیمیشن Progress با فیزیک اسپرینگ
  useEffect(() => {
    const targetProgress = ((currentStep + 1) / steps.length) * 100;
    const timer = setTimeout(() => {
      setProgress(targetProgress);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const progressSpring = useSpring(progress, {
    stiffness: 100,
    damping: 20,
  });

  const handleNext = async () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (currentStep < steps.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setCurrentStep((prev) => prev + 1);
    } else {
      await handleSubmit();
    }
    setIsAnimating(false);
  };

  const handlePrev = async () => {
    if (isAnimating || currentStep === 0) return;

    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setCurrentStep((prev) => prev - 1);
    setIsAnimating(false);
  };

  const handleSelect = (value, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);
    // اینجا می‌تونی API call بزنی
  };

  const isStepCompleted = (stepIndex) => {
    const field = steps[stepIndex].field;
    return formData[field] !== "";
  };

  const getCurrentOption = () => {
    return steps[currentStep].options.find(
      (opt) => opt.value === formData[steps[currentStep].field]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-black flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 overflow-hidden border border-gray-200 dark:border-gray-700"
      >
        {/* Header Gradient */}
        <div className="relative h-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ width: "50%" }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
          {/* Left Sidebar - Progress Steps */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 border-r dark:border-gray-700"
          >
            <div className="sticky top-8">
              <div className="mb-10">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  ثبت‌نام حرفه‌ای
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  ۴ مرحله تا عضویت در جامعه حرفه‌ای
                </p>
              </div>

              {/* Steps Visualization */}
              <div className="space-y-8">
                {steps.map((step, index) => {
                  const isActive = currentStep === index;
                  const isCompleted = isStepCompleted(index);

                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative"
                    >
                      {/* Step Connector Line */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-4 top-10 h-8 w-0.5 bg-gray-200 dark:bg-gray-700">
                          <motion.div
                            className="h-full bg-gradient-to-b from-emerald-500 to-cyan-500"
                            initial={{ scaleY: 0 }}
                            animate={{
                              scaleY: currentStep > index ? 1 : 0,
                              transformOrigin: "top",
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      )}

                      {/* Step Item */}
                      <div className="flex items-start gap-4">
                        {/* Step Indicator */}
                        <motion.div
                          className={`
                            relative flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center
                            ${
                              isActive
                                ? "bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/30"
                                : isCompleted
                                ? "bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30"
                                : "bg-gray-100 dark:bg-gray-700"
                            }
                            transition-all duration-300
                          `}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isCompleted ? (
                            <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <div className="flex items-center justify-center">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  isActive ? "bg-white" : "bg-gray-400"
                                }`}
                              />
                            </div>
                          )}

                          {/* Active Ring */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-xl border-2 border-emerald-400"
                              initial={{ scale: 1 }}
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            />
                          )}
                        </motion.div>

                        {/* Step Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-sm font-semibold ${
                                isActive
                                  ? "text-emerald-600 dark:text-emerald-400"
                                  : "text-gray-400"
                              }`}
                            >
                              مرحله {index + 1}
                            </span>
                            <div
                              className={`w-1 h-1 rounded-full ${
                                isActive ? "bg-emerald-500" : "bg-gray-300"
                              }`}
                            />
                            <span
                              className={`text-sm ${
                                isActive
                                  ? "text-gray-900 dark:text-white font-medium"
                                  : "text-gray-500"
                              }`}
                            >
                              {step.title}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Selected Value Preview */}
                          {isCompleted && formData[step.field] && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium"
                            >
                              ✓{" "}
                              {
                                steps[index].options.find(
                                  (opt) => opt.value === formData[step.field]
                                )?.label
                              }
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Bar */}
              <motion.div className="mt-12">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>پیشرفت</span>
                  <motion.span>{Math.round(progress)}%</motion.span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500"
                    style={{ width: progressSpring }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="h-full flex flex-col"
              >
                {/* Step Header */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/20 dark:to-cyan-900/20">
                      {steps[currentStep].icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                          مرحله {currentStep + 1} از {steps.length}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-emerald-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {steps[currentStep].title}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">
                        {steps[currentStep].question}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {steps[currentStep].description}
                  </p>
                </div>

                {/* Select Options */}
                <div className="flex-1">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {steps[currentStep].options.map((option, index) => (
                      <motion.div
                        key={option.value}
                        variants={itemVariants}
                        custom={index}
                      >
                        <motion.button
                          whileHover={{
                            y: -5,
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 300 },
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() =>
                            handleSelect(option.value, steps[currentStep].field)
                          }
                          className={`
                            w-full p-6 rounded-2xl border-2 text-right transition-all duration-300
                            ${
                              formData[steps[currentStep].field] ===
                              option.value
                                ? `border-emerald-500 bg-gradient-to-br ${option.color} text-white shadow-xl`
                                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700"
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            <div
                              className={`text-2xl ${
                                formData[steps[currentStep].field] ===
                                option.value
                                  ? "text-white"
                                  : "text-gray-400"
                              }`}
                            >
                              {option.icon}
                            </div>
                            <div className="text-right">
                              <div
                                className={`text-lg font-semibold ${
                                  formData[steps[currentStep].field] ===
                                  option.value
                                    ? "text-white"
                                    : "text-gray-900 dark:text-white"
                                }`}
                              >
                                {option.label}
                              </div>
                              <div
                                className={`text-sm mt-1 ${
                                  formData[steps[currentStep].field] ===
                                  option.value
                                    ? "text-white/80"
                                    : "text-gray-500 dark:text-gray-400"
                                }`}
                              >
                                {formData[steps[currentStep].field] ===
                                option.value
                                  ? "✓ انتخاب شده"
                                  : "برای انتخاب کلیک کنید"}
                              </div>
                            </div>
                          </div>

                          {/* Selection Indicator */}
                          {formData[steps[currentStep].field] ===
                            option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center"
                            >
                              <Check className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Selected Value Display */}
                  {getCurrentOption() && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-10 p-6 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/10 dark:to-cyan-900/10 rounded-2xl border border-emerald-200 dark:border-emerald-800"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`text-3xl ${
                              getCurrentOption().color.includes("from")
                                ? "bg-gradient-to-br " +
                                  getCurrentOption().color +
                                  " bg-clip-text text-transparent"
                                : ""
                            }`}
                          >
                            {getCurrentOption().icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                              انتخاب فعلی شما
                            </div>
                            <div className="text-xl font-bold text-gray-900 dark:text-white">
                              {getCurrentOption().label}
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <Sparkles className="w-6 h-6 text-emerald-500" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Navigation */}
                <motion.div
                  className="mt-12 pt-8 border-t dark:border-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between items-center">
                    <motion.div
                      whileHover={{ x: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={handlePrev}
                        disabled={currentStep === 0 || isAnimating}
                        variant="outline"
                        className="gap-2 px-8 py-3 rounded-xl border-2 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        مرحله قبل
                      </Button>
                    </motion.div>

                    <div className="text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        برای ادامه{" "}
                        {currentStep < steps.length - 1
                          ? "مرحله بعد"
                          : "ثبت نهایی"}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-emerald-500"
                            animate={{
                              width: formData[steps[currentStep].field]
                                ? "100%"
                                : "0%",
                            }}
                          />
                        </div>
                        <span>
                          {formData[steps[currentStep].field]
                            ? "آماده"
                            : "انتخاب کنید"}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ x: 3, scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={handleNext}
                        disabled={
                          !formData[steps[currentStep].field] || isAnimating
                        }
                        className={`
                          gap-3 px-8 py-3 rounded-xl text-lg font-medium
                          bg-gradient-to-r from-emerald-500 to-cyan-500
                          hover:from-emerald-600 hover:to-cyan-600
                          shadow-lg shadow-emerald-500/30
                          disabled:opacity-50 disabled:cursor-not-allowed
                          relative overflow-hidden
                        `}
                      >
                        {isAnimating ? (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                          />
                        ) : null}

                        <span className="relative z-10">
                          {currentStep === steps.length - 1
                            ? "اتمام و ثبت نهایی"
                            : "مرحله بعد"}
                        </span>
                        <ChevronRight className="w-5 h-5 relative z-10" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700">
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>همه اطلاعات شما محرمانه می‌ماند</span>
            </div>
            <div className="flex items-center gap-4">
              <span>پشتیبانی 24/7</span>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span>تضمین امنیت داده‌ها</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StepTracker;
