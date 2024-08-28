const styles = {
    card: {
        borderRadius: '4px',
        backgroundColor: '#1C1B1F',
      },
}

const Card = ({ children, otherStyles }) => {
    return (
        <div style={{ ...styles.card, ...otherStyles }}>
            {children}
        </div>
    );
}

export default Card;