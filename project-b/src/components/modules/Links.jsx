import {
  CircleUser,
  LockKeyhole,
  Bell,
  Languages,
  Newspaper,
  Blend,
  CalendarDays,
  CircleQuestionMark,
  Phone,
  ArrowRight,
} from "lucide-react";

function Links() {
  const links = [
    {
      label: "حساب",
      items: [
        {
          link: "مدیریت حساب",
          icon: <CircleUser />,
        },
        {
          link: "امنیت و رمز ورود",
          icon: <LockKeyhole />,
        },
        {
          link: "اعلان ها",
          icon: <Bell />,
        },
      ],
    },
    {
      label: "شخصی سازی",
      items: [
        {
          link: "زبان ورودی",
          icon: <Languages />,
        },
        {
          link: "درباره ما",
          icon: <Newspaper />,
        },
        {
          link: "تم اپلیکیشن",
          icon: <Blend />,
        },
        {
          link: "قرار ملاقات ها",
          icon: <CalendarDays />,
        },
      ],
    },
    {
      label: "پشتیبانی",
      items: [
        {
          link: "مرکز کمک",
          icon: <CircleQuestionMark />,
        },
        {
          link: "تماس با ما",
          icon: <Phone />,
        },
      ],
    },
  ];

  return (
    <div className="rounded-md">
      {links.map((section, index) => (
        <div key={index} className="mb-2 last:mb-0">
          {/* عنوان سکشن */}
          <h3 className="text-sm font-semibold text-gray-500 mb-2 pr-2">
            {section.label}
          </h3>

          {/* آیتم‌های سکشن */}
          <ul className="shadow py-2 px-3 rounded-md">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-center justify-between py-1"
              >
                <span className="flex items-center gap-2 text-xs font-bold text-gray-500">
                  {item.icon}
                  {item.link}
                </span>
                <ArrowRight size={16} className="text-gray-400" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Links;
