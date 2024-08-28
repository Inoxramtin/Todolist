// components
import Card from '../../components/Card';
// sections
import CategoryList from './category-panel/CategoryList';
import CategoryItem from './category-panel/CategoryItem';

const styles = {
    wrapper: {
        height: '100vh',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#fff',
    },
    categoryList: {
        color: '#fff',
    },
    categoryItem: {
        backgroundColor: '#444',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    moreButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        alignItems: 'center'
    },
    calendar: {
        marginTop: '20px',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
    },
}

const CategoryPanel = ({ categories, selectedId, onCategorySelect }) => {

    return (
        <Card>
            <div style={styles.wrapper}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '16px', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={styles.header}>
                                <span>Today</span>
                                <span>6/12</span>
                            </div>
                            <CategoryItem id={0} title={'Category'} isSelected={false} action={<button style={styles.moreButton} onClick={() => {}}>+</button>} onClicked={() => {}} />
                        </div>
                        <CategoryList categories={categories} selectedId={selectedId} onCategorySelect={onCategorySelect} />
                    </div>
                    <div style={styles.calendar}>
                        A placeholder for the calendar
                        <p>May 2024</p>
                    </div> 
                </div>
            </div> 
      </Card>
    );
}

export default CategoryPanel