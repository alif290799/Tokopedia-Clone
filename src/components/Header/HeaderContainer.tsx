import FirstLayerHeader from "./FirstLayerHeader"
import SecondLayerHeader from "./SecondLayerHeader"
import ThirdLayerHeader from "./ThirdLayerHeader"

const HeaderContainer: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
        <nav>
            <FirstLayerHeader />
            <SecondLayerHeader />
            <ThirdLayerHeader />
        </nav>
    </header>
  )
}

export default HeaderContainer