import AboutMe from "@/components/AboutMe"
import NavBar from "@/components/NavBar"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"

const HomePage = () => {
  return (
    <>
      <header className="flex flex-col ">
        <AboutMe />
        {/* <NavBar /> */}
        {/* <Contact /> */}
      </header>

      <main className="flex flex-col gap-10">
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default HomePage