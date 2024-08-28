
const styles = {
    item: {
        padding: '12px',
        borderRadius: '5px',
        color: '#000000',
        backgroundColor: '#D9D9D9',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    itemSelected: {
        color: '#FFFFFF',
        backgroundColor: '#000000'
    },

    titleTypo: {
        margin: '0',
        fontSize: '14px',
        fontWeight: '700'
    }
}

const CategoryItem = ({ id, title, isSelected, action, onClicked }) => {

    const onItemClick = () => {
        onClicked(id);
    }

    return (
        <div key={id} style={{ ...styles.item, ...(isSelected && styles.itemSelected ) }} onClick={onItemClick}>
            <p style={styles.titleTypo}>{title}</p>
            {action && (action)}
        </div>
    );
}

export default CategoryItem;