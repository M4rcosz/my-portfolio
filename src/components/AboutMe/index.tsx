
const AboutMe = () => {

    return (
        <section className="flex flex-col gap-8 grow justify-center mb-60 relative h-full">
            <div className="w-full h-screen bg-cover bg-no-repeat blur-[0.2px] absolute z-[-1] bg-center"> </div>
            <h1 className="text-center absolute top-4 translate-x-1/2 right-1/2 font-rubikDoodle font-semibold text-white uppercase">Biografia</h1>
            <div className="overflow-hidden rounded-full bg-white w-40 h-40 mx-auto border-2 box-content">
                <img src="minhaFoto.jpg" alt="Foto de Marcos Paulo" className="w-full h-full" />
            </div>
            <p className="text-center mx-16 ">
                Opa, me chamo Marcos Paulo, e sou um jovem autodidata de 18 anos que segue no começo de sua carreira como Front-End Developer, uma pessoa tranquila que deseja mergulhar nesse mundo da programação e aprender coisas novas, um amante da tecnologia que um dia deseja contribuir para novas ferramentas e inovações no mundo.
            </p>
        </section>
    )
}

export default AboutMe