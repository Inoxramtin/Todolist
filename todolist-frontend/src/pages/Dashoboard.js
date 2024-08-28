// Dashboard.js
import React, { useEffect, useState } from 'react';
// api
import Api from '../api/api';
// utils
import { taskNormalizer } from '../utils/task';
import { categoryNormalizer } from '../utils/category';
// sections
import ProfilePanel from '../sections/dashboard/ProfilePanel';
import CategoryPanel from '../sections/dashboard/CategoryPanel';
import TaskPanel from '../sections/dashboard/TaskPanel';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Api.fetchUserCategories()
      .then((response) => {
        if(response.data.categoryGetId && response.data.categoryGetId.length > 0)
          setCategories(response.data.categoryGetId.map((category) => categoryNormalizer(category)));
      }).catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      Api.fetchUserTasks(selectedCategoryId)
      .then((response) => {
        if(response.data.TaskList && response.data.TaskList.length > 0)
          setTasks(response.data.TaskList.map((task) => taskNormalizer(task)));
        console.log('ramtin', response.data);
      }).catch((error) => {
        setTasks([]);
        console.error(error);
      });
    } else {
      setTasks([]);
    }
  }, [selectedCategoryId]);

  const handleCategoryChange = (id) => setSelectedCategoryId(id);

  return (
    <div style={styles.container}>
      <div style={styles.sidebarContainer}>
        <ProfilePanel />
      </div>
      
      <div style={styles.taskCategoriesContainer}>
        <CategoryPanel categories={categories} selectedId={selectedCategoryId} onCategorySelect={handleCategoryChange} />
      </div>

      <div style={styles.taskListContainer}>
        <TaskPanel tasks={tasks} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    gap: '16px',
    display: 'inline-flex',
    margin: '24px 16px',
    width: '100%',
    height: '0'
  },
  sidebarContainer: {
    flexGrow: 0.1,
  },
  taskCategoriesContainer: {
    flexGrow: 0.3,
  },
  taskListContainer: {
    flexGrow: 5,
  },
};

export default Dashboard;
