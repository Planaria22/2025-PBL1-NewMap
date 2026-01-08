import BurgerMenu from "../elements/burgermenu";

const Header: React.FC = () => {
    return(
            <>
                <header className="fixed flex items-center justify-between top-0 left-0 right-0 z-50 h-16 pl-2 bg-darkColor">
                    <h1><a href="/" className="text-2xl text-white">大阪公大高専バリアフリーマップ</a></h1>
                    <BurgerMenu />
                </header>
            </>
    )
}
export default Header;