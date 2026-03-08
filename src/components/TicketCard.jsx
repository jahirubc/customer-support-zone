const TicketCard = ({ ticket, handleStartTask }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{ticket.title}</h2>
                <p>{ticket.description}</p>
                <p><b>Customer:</b> {ticket.customer}</p>
                <p><b>Priority:</b> {ticket.priority}</p>
                <p className="text-sm">{ticket.createdAt}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleStartTask(ticket)}
                        className="btn btn-primary btn-sm"
                    >
                        Start Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;