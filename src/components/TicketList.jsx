import TicketCard from "./TicketCard";

const TicketList = ({ tickets, handleStartTask }) => {

  return (

    <div className="grid grid-cols-2 gap-4">

      {
        tickets.map(ticket => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            handleStartTask={handleStartTask}
          />
        ))
      }

    </div>

  );
};

export default TicketList;