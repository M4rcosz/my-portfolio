
const AboutMe = () => {

    return (
        <section className="flex grow justify-center mb-60 h-fit">
            <div className="flex overflow-hidden rounded-full w-[160px] h-[160px]  border-[3px]  shrink-0">
                <img src="minhaFoto.jpg" alt="Foto de Marcos Paulo" className="w-full h-full" />
            </div>
            <span className="flex flex-col gap-2 mx-8 text-white">
                <h1 className="text-white text-4xl font-quickSand font-semibold ">Marcos Paulo</h1>
                <p>Sou um jovem autodidata que segue no começo de sua carreira como Front-End Developer, uma pessoa que deseja mergulhar nesse mundo da programação e aprender coisas novas, um amante da tecnologia que um dia deseja contribuir para novas ferramentas e inovações no mundo.</p>
            </span>
        </section>
    )
}

export default AboutMe