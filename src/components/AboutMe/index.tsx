
const AboutMe = () => {

    return (
        <section className="flex flex-col gap-5 mb-6 h-fit mx-4 w-fit">
            {/* <div className=" flex overflow-hidden rounded-full w-[160px] h-[160px]  border-[2px]  shrink-0  translate-y-[10%]">
                <img src="minhaFoto.jpg" alt="Foto de Marcos Paulo" className="w-full h-full " />
            </div> */}
            <span className="flex flex-col gap-2 max-w-[600px]">
                <h1 className="text-light text-5xl font-quickSand font-semibold translate-x-[-34px] text-nowrap">Marcos Paulo</h1>
                <p className="text-textColor relative before:bg-red before:w-[2px] before:h-[110%] before:block before:absolute before:left-[-20px] before:top-[-2.5%] before:rounded-full after:bg-white after:w-[2px] after:h-[5px] after:block after:absolute after:left-[-20px] after:top-[-2.5%] after:rounded-full after:animate-[downUp_3.5s_ease-in-out_infinite] after:shadow-[0_0_7px_1px_#ffffffdf] before:shadow-[0_0_10px_2px_#dd000070]">Sou um jovem autodidata que segue no começo de sua carreira como desenvolvedor Front-End, uma pessoa que deseja mergulhar nesse mundo da programação e aprender coisas novas, um amante da tecnologia que um dia deseja contribuir para novas ferramentas e inovações no mundo.</p>
            </span>
        </section>
    )
}

export default AboutMe