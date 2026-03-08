const TaskStatus = ({ tasks, handleComplete }) => {

    return (

        <div className="bg-base-200 p-4 rounded-lg">

            <h2 className="text-xl font-bold mb-4">Task Status</h2>

            {
                tasks.map(task => (

                    <div key={task.id} className="flex justify-between mb-2">

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