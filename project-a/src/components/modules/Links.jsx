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
    {
      link: "مرکز کمک",
      icon: <CircleQuestionMark />,
    },
    {
      link: "تماس با ما",
      icon: <Phone />,
    },
  ];
  return (
    <div className="shadow rounded-md p-2">
      {links.map((link) => (
        <ul className="">
          <li className="flex items-center justify-between py-2">
            <span className="flex items-center gap-2 text-sm font-extralight">
              {link.icon}
              {link.link}
            </span>
            <ArrowRight />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Links;
