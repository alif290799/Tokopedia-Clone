import PCIDSS from "../../assets/PCIDSS.png";
import BSIISO from "../../assets/BSIISO.png";
import { FooterContent } from "./FooterContent";
import logoFooter from "../../assets/logoFooter.png";

const FooterContainer: React.FC = () => {
  const footerLinksOne = [
    { text: "Tokopedia", href: "#" },
    { text: "Tentang Tokopedia", href: "#" },
    { text: "Karir", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Tokopedia Parents", href: "#" },
    { text: "Tokopedia Affiliate Program", href: "#" },
    { text: "Tokopedia B2B Digital", href: "#" },
    { text: "Tokopedia Marketing Solutions", href: "#" },
    { text: "Kalkulator Indeks Masa Tubuh", href: "#" },
    { text: "Tokopedia Farma", href: "#" },
    { text: "Ramadhan Ekstra Seru", href: "#" },
    { text: "Home Living Salebration", href: "#" },
  ];

  const footerLinksTwo = [
    { text: "Tagihan & Top Up", href: "#" },
    { text: "Tokopedia COD", href: "#" },
    { text: "Bebas Ongkir", href: "#" },
  ];

  const footerLinksThree = [
    { text: "Pusat Edukasi Seller", href: "#" },
    { text: "Daftar Official Store", href: "#" },
  ];

  const footerLinksFour = [
    { text: "Tokopedia Care", href: "#" },
    { text: "Syarat dan Ketentuan", href: "#" },
    { text: "Kebijakan Privasi", href: "#" },
  ];

  return (
    <footer>
      <div className="w-full flex justify-center border-solid border-t-2 border-gray-300">
        <div className="flex justify-center items-start w-8/12 mb-12 mt-8 gap-5">
          <div>
            <h3 className="font-bold mb-2">Tokopedia</h3>
            <FooterContent footerLinks={footerLinksOne} />
          </div>
          <div>
            <div>
              <h3 className="font-bold mb-2 w-48">Beli</h3>
              <FooterContent footerLinks={footerLinksTwo} />
            </div>
            <div>
              <h3 className="font-bold mb-2">Jual</h3>
              <FooterContent footerLinks={footerLinksThree} />
            </div>
            <div>
              <h3 className="font-bold mb-2">Bantuan dan Panduan</h3>
              <FooterContent footerLinks={footerLinksFour} />
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">
              <h3>Keamanan & Privasi</h3>
            </div>
            <div className="flex justify-center items-center gap-1 w-fit mb-3">
              <a href="">
                <img src={PCIDSS} alt="" className="w-20" />
              </a>
              <a href="">
                <img src={BSIISO} alt="" className="w-28" />
              </a>
              <a href="">
                <img src={BSIISO} alt="" className="w-28" />
              </a>
            </div>
            <div className="font-bold">
              <h3 className="mb-2">Ikuti Kami</h3>
              <div className="flex justify-center items-center gap-2 w-fit">
                <a href="">
                  <i className="bx bxl-facebook-circle text-blue-900 text-3xl" />
                </a>
                <a href="">
                  <i className="bx bxl-twitter text-blue-400 text-3xl" />
                </a>
                <a href="">
                  <i className="bx bxl-pinterest text-red-600 text-3xl" />
                </a>
                <a href="">
                  <i className="bx bxl-instagram-alt text-pink-500 text-3xl" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={logoFooter} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
