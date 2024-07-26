import { useEffect, useState } from "react";
import Layout from "./Layout";
import { TaskClient } from "./tasks/client";
import ModalTask from "./Modal";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const getTasks = async () => {
        const response = await fetch("http://localhost:3000/api/tasks");

        const data = await response.json();
        setTasks(data);
    }
        
    useEffect(() => {
        getTasks();
    }, [])

    return(
        <>
            <Layout title={"Dashboard"}>
                <TaskClient data={tasks} setShowModal={setShowModal} />
            </Layout>
            {
                showModal && (
                    <ModalTask
                        showModal={showModal}
                        setShowModal={setShowModal}
                        operation={"Create"}
                    />
                )
            }
        </>       
    )
}

export default Home;