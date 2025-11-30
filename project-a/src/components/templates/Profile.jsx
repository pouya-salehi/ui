import Header from "../modules/Header";
import ImageContainer from "../modules/ImageContainer";
import Details from "../modules/Details";
//icons
import { Star, ArrowRight, ArrowUpDown } from "lucide-react";
function Profile() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-xs py-3 shadow flex flex-col gap-4 bg-white px-3">
      <ImageContainer />
      {/* <Details /> */}
      </div>
    </div>
  );
}

export default Profile;
