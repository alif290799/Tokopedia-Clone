import carouselOne from "../../assets/carouselOne.png";
import carouselTwo from "../../assets/carouselTwo.png";
import carouselThree from "../../assets/carouselThree.png";
import carouselFour from "../../assets/carouselFour.png";
import { Button } from "./Button";


const imgs = [carouselOne, carouselTwo, carouselThree, carouselFour];

const Carousel: React.FC = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">
        {imgs.map((img, index) => {
          return <img key={index} src={img} alt="" />;
        })}
      </div>
      <Button children="chevron_left" className="material-symbols-outlined"></Button>
      <Button children="chevron_right" className="material-symbols-outlined"></Button>
    </div>
  );
};

export default Carousel;
