import Side from "../../SideContent/side/Side"
import Ppost from "../Ppost/Ppost"
import Life from "../life/Life"
import Music from "../musics/Music"
import Popular from "../popular/Popular"



const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Popular />
            <Ppost />
            <Life />
            <Music />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default Home