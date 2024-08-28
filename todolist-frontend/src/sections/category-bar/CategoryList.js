import CategoryAction from "./CategoryAction";
import CategoryItem from "./CategoryItem";

const styles = {
    list: {
        gap: '16px',
        display: 'flex',
        flexDirection: 'column'
    }
}

const CategoryList = ({ categories }) => {
    return (
        <div style={styles.list}>
            {categories.map((category) => (
                <CategoryItem 
                    id={category.id} 
                    title={category.name}
                    isSelected={category.isSelected} 
                    action={<CategoryAction/>}
                    onClicked={() => {}} />
            ))} 
        </div>
    );
}

export default CategoryList;