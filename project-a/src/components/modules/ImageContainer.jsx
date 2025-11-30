import { Bookmark } from "lucide-react";
import Details from "./Details";

function ImageContainer() {
  return (
    <div className="relative h-120 w-full overflow-hidden rounded-lg">
      <img
        src="./images/person.jpg"
        className="h-full w-full object-cover absolute"
        alt="person"
      />
      <Details />
    </div>
  );
}

export default ImageContainer;
