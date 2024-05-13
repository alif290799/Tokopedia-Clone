
import HeaderList from "./HeaderList";

const ThirdLayerHeader = () => {
  const links = [
    { text: "Meja Laptop", href: "#" },
    { text: "Ryzen 5", href: "#" },
    { text: "Iphone 12 Ibox", href: "#" },
    { text: "Rtx 2060 Super", href: "#" },
    { text: "Rtx 3080", href: "#" },
    { text: "Cooling Pad", href: "#" },
  ];

  return (
    <div
      className="h-5 py-4 mt-5 border-b-2 border-gray-200 text-xs text-gray-400 flex gap-5 items-center font-semibold"
      style={{ paddingLeft: "342px" }}
    >
      <div
        className="text-xs text-gray-400 flex gap-5 items-center font-semibold"
        style={{ width: "100%" }}
      >
        <HeaderList links={links}/>
      </div>
      <div className="flex justify-center items-center w-96">
        <span className="material-symbols-outlined text-lg pt-1 mr-1">
          location_on
        </span>
        <a href="#">
          Dikirim ke{" "}
          <span className="font-bold text-gray-600">Jakarta Pusat</span>
        </a>
        <a href="">
          <span className="material-symbols-outlined text-lg">
            {" "}
            expand_more{" "}
          </span>
        </a>
      </div>
    </div>
  );
};

export default ThirdLayerHeader;
