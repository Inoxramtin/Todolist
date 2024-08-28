// components
import Card from "../../components/Card";
// sections
import TaskItem from '../../sections/dashboard/task-panel/TaskItem';

const styles = {
    wrapper: {
        height: '100vh',
    },

    addTaskButton: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
}

const TaskPanel = ({ tasks }) => {
    return (
        <Card>
            <div style={styles.wrapper}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px' }}>
                    <button style={styles.addTaskButton}>+ Add Task</button>

                    {tasks.map((task, index) => (
                        <TaskItem key={index} description={task.description} isChecked={task.isChecked} onEditClick={() => {}} onDeleteClick={() =>{}} />
                    ))}
                </div>
            </div>
      </Card>
    );
}

export default TaskPanel;