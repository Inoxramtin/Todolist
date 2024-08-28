import CategoryAction from "./CategoryAction";
import CategoryItem from "./CategoryItem";

const styles = {
    list: {
        gap: '16px',
        display: 'flex',
        flexDirection: 'column'
    }
}

const CategoryList = ({ categories, selectedId, onCategorySelect }) => {
    return (
        <div style={styles.list}>
            {categories.map((category) => (
                <CategoryItem 
                    id={category.id} 
                    title={category.name}
                    isSelected={category.id == selectedId} 
                    action={<CategoryAction/>}
                    onClicked={onCategorySelect} />
            ))} 
        </div>
    );
}

export default CategoryList;