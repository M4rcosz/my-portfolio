const AboutMe = () => {
    return (
        <section className="flex flex-col gap-8 grow justify-center mb-60">
            <h1 className="text-center">Biografia</h1>
            <div className="overflow-hidden rounded-full bg-white w-40 h-40 mx-auto border-2 box-content">
                <img src="minhaFoto.jpg" alt="Foto de Marcos Paulo" className="w-full h-full" />
            </div>
            <p className="text-center mx-16">
                Olá, eu sou o Marcos Paulo, um jovem autodidata de 18 anos que segue no começo de sua carreira como Front-End Developer, uma pessoa tranquila que deseja mergulhar nesse mundo da programação e aprender coisas novas, um amante da tecnologia que um dia deseja contribuir para novas ferramentas e inovações no mundo.
            </p>
        </section>
    )
}

export default AboutMe