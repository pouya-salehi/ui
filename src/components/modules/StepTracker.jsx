"use client";
import {
  Earth,
  RefreshCcw,
  Monitor,
  Smartphone,
  LayoutPanelTop,
  Flame,
  Rocket,
  Sparkle,
  Gem,
} from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

const StepTracker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    howFindUs: "",
    interactionType: "",
    experienceLevel: "",
    preferredPlatform: "",
  });

  const steps = [
    {
      title: "آشنایی با سایت",
      question: "چطور با سایت ما آشنا شدید؟",
      options: [
        { value: "instagram", label: "اینستاگرام" },
        { value: "ai", label: "هوش مصنوعی (ChatGPT, etc)" },
        { value: "friend", label: "معرفی دوستان" },
        { value: "search", label: "جستجوی گوگل" },
        { value: "ads", label: "تبلیغات" },
        { value: "other", label: "سایر" },
      ],
      field: "howFindUs",
    },
    {
      title: "نوع تعامل",
      question: "چطور می‌خوای با سایت ما تعامل داشته باشی؟",
      options: [
        { value: "freelance", label: "فریلنسری و پروژه‌ای" },
        { value: "fulltime", label: "همکاری تمام‌وقت" },
        { value: "learning", label: "یادگیری و آموزش" },
        { value: "networking", label: "شبکه‌سازی" },
        { value: "investment", label: "سرمایه‌گذاری" },
      ],
      field: "interactionType",
    },
    {
      title: "سطح تجربه",
      question: "سطح تجربه‌ات چقدره؟",
      options: [
        { value: "beginner", label: "تازه‌کار", icon: <Sparkle /> },
        { value: "intermediate", label: "متوسط", icon: <Rocket /> },
        { value: "advanced", label: "حرفه‌ای", icon: <Flame /> },
        { value: "expert", label: "کارشناس سطح بالا", icon: <Gem /> },
      ],
      field: "experienceLevel",
    },
    {
      title: "پلتفرم مورد علاقه",
      question: "ترجیح میدی روی کدوم پلتفرم فعالیت کنی؟",
      options: [
        { value: "web", label: "وب‌سایت", icon: <Earth /> },
        { value: "mobile", label: "موبایل", icon: <Smartphone /> },
        { value: "desktop", label: "دسکتاپ", icon: <Monitor /> },
        { value: "cross", label: "کراس پلتفرم", icon: <RefreshCcw /> },
        { value: "all", label: "همه پلتفرم‌ها", icon: <LayoutPanelTop /> },
      ],
      field: "preferredPlatform",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSelect = (value, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    toast.success("ثبت‌نام با موفقیت انجام شد!");
  };

  const isStepCompleted = (stepIndex) => {
    const field = steps[stepIndex].field;
    return formData[field] !== "";
  };

  return (
    <div className="min-h-screen dark:from-gray-900 dark:to-black flex items-center justify-center">
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
    w-full max-w-4xl
    border-2
    rounded-4xl
    overflow-hidden
    py-4
  "
      >
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="min-h-[400px] flex flex-col"
            >
              {/* Step Content */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-500 text-center mb-10 leading-relaxed">
                  {steps[currentStep].question}
                </h2>

                <div className="space-y-6 flex flex-col justify-center items-center">
                  <Select
                    value={formData[steps[currentStep].field]}
                    onValueChange={(value) =>
                      handleSelect(value, steps[currentStep].field)
                    }
                  >
                    <SelectTrigger className="h-14 text-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 py-4 transition-colors cursor-pointer w-lg">
                      <SelectValue placeholder="یک گزینه انتخاب کنید..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-2">
                      {steps[currentStep].options.map((option, idx) => (
                        <motion.div
                          key={option.value}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <SelectItem
                            value={option.value}
                            className="text-sm font-extralight py-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 cursor-pointer"
                          >
                            <motion.div
                              className="flex items-center justify-between w-md"
                              whileHover={{ x: 5 }}
                            >
                              <span className="flex items-center justify-between w-lg text-sm">
                                {option.label}
                                {option.icon}
                              </span>
                            </motion.div>
                          </SelectItem>
                        </motion.div>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Selected Value Display */}
                  {formData[steps[currentStep].field] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-6 rounded-xl w-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                          انتخاب شما:{" "}
                          {
                            steps[currentStep].options.find(
                              (opt) =>
                                opt.value === formData[steps[currentStep].field]
                            )?.label
                          }
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-8 border-t dark:border-gray-700">
                <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    variant="outline"
                    className={`
                      gap-2 px-6 py-3
                      ${
                        currentStep === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
                      }
                    `}
                  >
                    <ChevronRight className="w-4 h-4" />
                    قبلی
                  </Button>
                </motion.div>

                <div className="text-sm mr-10 text-gray-500 dark:text-gray-400">
                  مرحله {currentStep + 1} از {steps.length}
                </div>

                <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleNext}
                    disabled={!formData[steps[currentStep].field]}
                    className={`
                      gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600
                      cursor-pointer
                      hover:from-emerald-600 hover:to-emerald-700
                      ${
                        !formData[steps[currentStep].field]
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }
                    `}
                  >
                    {currentStep === steps.length - 1
                      ? "اتمام ثبت‌نام"
                      : "مرحله بعد"}
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-3 mb-2">
          {steps.map((_, index) => (
            <motion.span
              key={index}
              animate={{
                scale: currentStep === index ? 1.4 : 1,
                opacity: currentStep >= index ? 1 : 0.3,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
        w-2 h-2 rounded-full bg-black/80 
      "
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StepTracker;
