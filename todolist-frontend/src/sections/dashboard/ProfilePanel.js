// components
import Card from '../../components/Card';

const styles = { 
    wrapper: {
        height: '100vh',
    },
    avatar: {
        borderRadius: '50%',
    },
    settingsButton: {
        marginTop: 'auto',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },
}

const ProfilePanel = ({}) => {

    return (
        <Card>
            <div style={styles.wrapper}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '16px 4px' }}>
                    <img src="https://via.placeholder.com/100" alt="User Avatar" style={styles.avatar} />
                    <button style={styles.settingsButton}>
                        <img src="https://via.placeholder.com/50" alt="Settings Icon" />
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default ProfilePanel;