import Card from "@/components/Card"

const Projects = () => {
    return (
        <section>
            <h2 className="text-light text-center text-2xl mb-3">Projetos</h2>
            <ul>
                <Card
                    title="Organo"
                    src="projects/organo.png"
                    alt="Imagem da tela inicial do Site"
                    date="Outubro 2022"
                    describe="Projeto consiste em um site de organização, onde o usuário pode criar e montar grupos de organizações, além de criar a organização em si. Lá é possível escolher a cor do grupo e do card, além de também poder registrar uma data de entrada na organização e sua função ou cargo também."
                    url="https://organo-1x73upkxq-m4rcosz.vercel.app"
                    tags={["React", "Typescript",]}
                />
            </ul>
        </section>
    )
}

export default Projects