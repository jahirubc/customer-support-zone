import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TaskStatus from "./components/TaskStatus";
import TicketList from "./components/TicketList";

import ticketsData from "./assets/data/tickets.json";

function App() {

  const [tickets, setTickets] = useState(ticketsData);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState(0);

  const handleStartTask = (ticket) => {

    setTasks([...tasks, ticket]);

  };

  const handleComplete = (id) => {

    const completedTask = tasks.find(task => task.id === id);

    const remainingTasks = tasks.filter(task => task.id !== id);

    setTasks(remainingTasks);

    setResolved(resolved + 1);

    const remainingTickets = tickets.filter(ticket => ticket.id !== id);

    setTickets(remainingTickets);

  };

  return (
    <>

      <Navbar />

      <Banner
        inProgress={tasks.length}
        resolved={resolved}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 p-6">

        <div className="col-span-2">
          <TicketList
            tickets={tickets}
            handleStartTask={handleStartTask}
          />
        </div>

        <div>
          <TaskStatus
            tasks={tasks}
            handleComplete={handleComplete}
          />
        </div>

      </div>

    </>
  );
}

export default App;