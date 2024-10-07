import React from 'react';
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/layout/Dashboard";

// Widgets components
import Widget from "./components/widgets/Widget";
import Tooltip from "./components/widgets/Tooltip";
import ProgressBar from "./components/widgets/ProgressBar";
import Card from "./components/widgets/Card";

// Users components
import Avatar from "./components/users/Avatar";
import UserList from "./components/users/UserList";
import UserProfile from "./components/users/UserProfile";

// Sample user data
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatarUrl: 'https://via.placeholder.com/60',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    bio: 'Vivamus et urna vel elit tincidunt ullamcorper.',
    avatarUrl: 'https://via.placeholder.com/60',
  },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        
        <div className="dashboard-content">
          <Dashboard />

          {/* Widgets Section */}
          <h2>Widgets Section</h2>
          <div className="widgets">
            <Widget title="Widget 1" description="This is the first widget." />
            <ProgressBar progress={65} />
            <Tooltip text="Hover over me!" />
            <Card title="Sample Card" content="This is some content inside the card." />
          </div>

          {/* Users Section */}
          <h2>Users Section</h2>
          <div className="users">
            <UserList users={users} />
            <UserProfile user={users[0]} /> {/* Display profile of the first user */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
