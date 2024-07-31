import { useEffect, useState } from "react";
import Layout from "./Layout";
import { TaskClient } from "./tasks/client";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await fetch("http://localhost:3003/api/tasks");

    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Layout title={"Dashboard"}>
      <TaskClient data={tasks} />
    </Layout>
  );
};

export default Home;
