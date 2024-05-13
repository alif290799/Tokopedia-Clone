import HeaderList from "./HeaderList";

const FirstLayerHeader = () => {

  const links = [
    { text: "Tentang Tokopedia", href: "#" },
    { text: "Mitra Tokopedia", href: "#" },
    { text: "Mulai Berjualan", href: "#" },
    { text: "Promo", href: "#" },
    { text: "Tokopedia Care", href: "#" }
  ];

  return (
    <div className="flex justify-between items-center h-7 w-full px-8 bg-slate-200">
      <div className="flex justify-between items-center gap-3 w-fit text-xs text-gray-500">
        <span className="material-symbols-outlined text-xl">phone_iphone</span>
        <a href="#"><p className="hover:text-green-500">Download Tokopedia App</p></a>
      </div>
      <div className="flex justify-between items-center gap-3 w-fit text-xs text-gray-500">
        <HeaderList links={links}/>
      </div>
    </div>
  );
  };
  
  export default FirstLayerHeader;
  