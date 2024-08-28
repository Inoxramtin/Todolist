// Dashboard.js
import React from 'react';
import Card from '../components/Card';
import CategoryList from '../sections/category-bar/CategoryList';
import CategoryItem from '../sections/category-bar/CategoryItem';

const _mock_categorties = [
  {
    id: 1,
    name: 'Work',
    isSelected: true,
  },
  {
    id: 2,
    name: 'Project',
    isSelected: false,
  },
  {
    id: 3,
    name: 'Class',
    isSelected: false,
  },
  {
    id: 4,
    name: 'DailyTask',
    isSelected: false,
  }
]

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <Sidebar />
      <TaskCategories />
      <TaskList />
    </div>
  );
};

const Sidebar = () => (
  <div style={styles.sidebarContainer}>
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
  </div>
);

const TaskCategories = () => (
  <div style={styles.taskCategoriesContainer}>
    <Card>
      <div style={styles.wrapper}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '16px', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={styles.todayHeader}>
                <span>Today</span>
                <span>6/12</span>
              </div>
              <CategoryItem id={0} title={'Category'} isSelected={false} action={<button style={styles.moreButton} onClick={() => {}}>+</button>} onClicked={() => {}} />
            </div>
            <CategoryList categories={_mock_categorties} />
          </div>
          <div style={styles.calendar}>
            A placeholder for the calendar
            <p>May 2024</p>
          </div> 
        </div>
      </div> 
    </Card>
  </div>
);

const TaskList = () => (
  <div style={styles.taskListContainer}>
    <Card>
      <div style={styles.wrapper}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '16px 4px' }}>
          <button style={styles.addTaskButton}>+ Add Task</button>
          {['Daily Meeting', 'Research and Inspiration', 'Wireframing', 'User Personas'].map((task, index) => (
            <div key={index} style={styles.taskItem}>
              <input type="checkbox" />
              <span>{task}</span>
              <button style={styles.editButton}>✏️</button>
              <button style={styles.deleteButton}>🗑️</button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

const styles = {
  container: {
    gap: '16px',
    display: 'inline-flex',
    height: '100%',
    padding: '24px 16px'
  },

  sidebarContainer: {
    flexGrow: 1,
  },

  taskCategoriesContainer: {
    flexGrow: 3,
  },

  taskListContainer: {
    flexGrow: 6,
  },

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

  todayHeader: {
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

  addTaskButton: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },

  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
  },

  editButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },

  deleteButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Dashboard;
