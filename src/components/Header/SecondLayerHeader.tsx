import logoTokped from '../../assets/logoTokped.svg'

const SecondLayerHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-10 px-10 pt-10 gap-10">
      <a href="#">
        <img className="max-w-xl" src={logoTokped} alt="" />
      </a>
      <div className="hover:bg-slate-100 px-2 py-2 rounded-lg">
        <a href="#">Kategori</a>
      </div>
      <div className="flex items-center border-slate-300 border-solid border h-10 px-4 rounded-xl w-full">
        <i className="bx bx-search-alt-2 mr-4 text-slate-400 text-lg"></i>
        <input
          className="w-full focus:outline-none"
          type="text"
          placeholder="Cari di Tokopedia"
        />
      </div>
      <div className="hover:bg-slate-100 px-2 py-1 rounded-lg">
        <a href="">
          <i className="bx bx-cart-alt text-lg"></i>
        </a>
      </div>
      <div className="h-7 border -ml-2"></div>
      <div className="flex items-center justify-between gap-5">
        <div>
          <button className="border-green-600 border py-1 px-4 rounded-lg text-green-600 font-bold">
            Masuk
          </button>
        </div>
        <div>
          <button className="border-green-600 border py-1 px-4 rounded-lg text-white bg-green-600 font-bold">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondLayerHeader;
