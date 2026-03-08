const TaskStatus = ({ tasks, handleComplete }) => {

    return (
        <div className="bg-base-200 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">
                Task Status
            </h2>
            {
                tasks.map(task => (
                    <div
                        key={task.id}
                        className="flex justify-between items-center mb-3 bg-white p-2 rounded"
                    >
                        <p>{task.title}</p>
                        <button
                            onClick={() => handleComplete(task.id)}
                            className="btn btn-success btn-xs"
                        >
                            Complete
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default TaskStatus;