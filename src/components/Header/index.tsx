import AboutMe from "@/components/AboutMe"
import NavBar from "@/components/NavBar"

const Header = () => {
    return (
        <header className="h-screen border flex flex-col">
            <NavBar />
            <AboutMe />
        </header>
    )
}

export default Header