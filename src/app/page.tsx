import AboutMe from "@/components/AboutMe"
import NavBar from "@/components/NavBar"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:mb-[120px]">
        <header className="flex flex-col lg:w-1/2">
          <AboutMe />
          {/* <NavBar /> */}
          <Contact />
        </header>

        <main className="flex flex-col gap-20 lg:w-1/2">
          <Skills />
          <Projects />
        </main>
      </div>

      <footer className="">
        <p className="text-xs">Aplicação desenvolvida no <strong>Visual Studio Code</strong> e construída com <strong>Next.js</strong> e <strong>Tailwind CSS</strong>, hospedada na <strong>Vercel</strong>.</p>
      </footer>
    </>
  )
}

export default HomePage