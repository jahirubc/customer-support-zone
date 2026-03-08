import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ticketsData from "./assets/data/tickets.json";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TaskStatus from "./components/TaskStatus";
import TicketList from "./components/TicketList";

function App() {

  const [tickets, setTickets] = useState(ticketsData);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState(0);

  const handleStartTask = (ticket) => {

    const exists = tasks.find(task => task.id === ticket.id);

    if (exists) {
      toast.error("Task already started!");
      return;
    }
    setTasks([...tasks, ticket]);
    toast.success("Ticket moved to In Progress");
  };

  const handleComplete = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
    setResolved(resolved + 1);
    const remainingTickets = tickets.filter(ticket => ticket.id !== id);
    setTickets(remainingTickets);
    toast.success("Ticket resolved successfully!");
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner
        inProgress={tasks.length}
        resolved={resolved}
      ></Banner>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 p-6">
        <div className="col-span-2">
          <TicketList
            tickets={tickets}
            handleStartTask={handleStartTask}
          ></TicketList>
        </div>

        <div>
          <TaskStatus
            tasks={tasks}
            handleComplete={handleComplete}
          ></TaskStatus>
        </div>

      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;