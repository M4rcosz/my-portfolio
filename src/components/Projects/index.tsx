import Card from "@/components/Card"
import H2Subtitle from "@/components/H2Subtitle"

const Projects = () => {
    return (
        <section>
            <H2Subtitle>Projetos</H2Subtitle>
            <ul>
                <Card
                    title="Organo"
                    src="/projects/organo.png"
                    alt="Imagem da tela inicial do Site"
                    date="Out 2022"
                    describe="Projeto consiste em um site de organização, onde o usuário pode criar e montar grupos de organizações, além de criar a organização em si. Lá é possível escolher a cor do grupo e do card, além de também poder registrar uma data de entrada na organização e sua função ou cargo também."
                    url="https://organo-1x73upkxq-m4rcosz.vercel.app"
                    tags={["React", "TypeScript", "CSS", "Redux", "Vite"]}
                />
            </ul>
        </section>
    )
}

export default Projects