const styles = {
    item: {
        width: '100%',
        padding: '8px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexRow: {
        gap: '16px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        background: 'none',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
    }
}

const TaskItem = ({ id, description, isChecked, onCheck, onEditClick, onDeleteClick }) => {
    return (
        <div style={styles.item}>
            <div style={styles.flexRow}>
                <input type="checkbox" isChecked={isChecked} onClick={() => onCheck(id, isChecked)} />
                <p>{description}</p>
            </div>

            <div style={styles.flexRow}>
                <button style={styles.button} onClick={onEditClick}>✏️</button>
                <button style={styles.button} onClick={onDeleteClick}>🗑️</button>
            </div>
        </div>
    );
}

export default TaskItem;