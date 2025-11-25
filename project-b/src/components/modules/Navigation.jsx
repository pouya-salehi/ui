import { House, Heart, Compass, Settings, UserRound } from "lucide-react";

function Navigation() {
  const nav = [
    {
      link: "خانه",
      icon: <House />,
    },
    {
      link: "کاوش",
      icon: <Compass />,
    },
    {
      link: "مورد علاقه",
      icon: <Heart />,
    },
    {
      link: "تنظیمات",
      icon: <Settings />,
    },
    {
      link: "حساب",
      icon: <UserRound />,
      active: true,
    },
  ];

  return (
    <div className="flex w-fit">
      {nav.map((navigations, index) => (
        <ul key={index} className="flex">
          <li
            className={`
            flex items-center gap-1 p-2 flex-col
            ${
              navigations.active
                ? "text-gray-600 font-semibold border-t-2 border-gray-500"
                : "text-gray-400"
            }
          `}
          >
            {navigations.icon}
            <span className="text-xs">{navigations.link}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Navigation;
