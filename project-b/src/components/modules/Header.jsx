import { TbAntennaBars5 } from "react-icons/tb";
import { Battery, Wifi } from "lucide-react";
function Header() {
  return (
    <ul className="flex justify-between">
      <li className="flex items-center gap-2">
        <Battery size={20}/>
        <Wifi size={20}/>
        <TbAntennaBars5 size={22}/>
      </li>
      <li>
        <span>11:11</span>
      </li>
    </ul>
  );
}

export default Header;
