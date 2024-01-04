const NavBar = () => {
    return (
        <nav className="flex m-4">
            <p className="grow">Portfolio</p>
            <ul className="flex gap-12 basis-1/2 justify-end">
                <li>
                    <a href="#">Início</a>
                </li>
                <li>
                    <a href="#">Habilidades</a>
                </li>
                <li>
                    <a href="#">Projetos</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar