// utils
import axios from '../utils/axios';

function Api() {
    return {
        fetchUserCategories: () => 
            axios.get('/api/getIdCategory'),
        fetchUserTasks: (categoryId) => 
            axios.get(`/api/tasks_list/${categoryId}`)
    }
};

export default Api();