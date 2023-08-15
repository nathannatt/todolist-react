import Header from "../../Components/Header"
import Tasks from "../../Components/Tasks"
function Home () {
    const taskName = "Tasks"
    return (
        <main>
            <Header />
            <Tasks taskName={taskName} />
            
        </main>
    )
}

export default Home