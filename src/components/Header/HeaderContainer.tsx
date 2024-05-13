import FirstLayerHeader from "./FirstLayerHeader"
import SecondLayerHeader from "./SecondLayerHeader"
import ThirdLayerHeader from "./ThirdLayerHeader"

const HeaderContainer = () => {
  return (
    <header className="sticky top-0">
        <nav>
            <FirstLayerHeader />
            <SecondLayerHeader />
            <ThirdLayerHeader />
        </nav>
    </header>
  )
}

export default HeaderContainer