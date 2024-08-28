import { useState } from "react";

const CategoryAction = ({ }) => {
    const [actionOpen, setActionOpen] = useState(false);

    return (<button onClick={() => setActionOpen(!actionOpen)}>...</button>);
}

export default CategoryAction;