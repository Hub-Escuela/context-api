import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import MyContent from "./components/MyContent";
import UserContext from "./context/UserContext";

const App = () => {
  const handleClick = (text) => {
    setUser({
      ...user,
      name: text,
    });
    console.log(text);
  };

  const handleChange = (event, email) => {
    setUser({
      ...user,
      email: event.target.value + email,
    });
    console.log(event.target.value + email);
  };

  const [user, setUser] = useState({
    avatar: "https://picsum.photos/100",
    name: "Random",
    email: "someone@random.com",
    city: "Some Location"
  });

  return (
    <div className="app">
      <UserContext.Provider value={{
        user: user,
        handleClick: handleClick,
        handleChange: handleChange
      }}>
        <Layout>
          <MyContent />
        </Layout>
      </UserContext.Provider>
    </div>
  );
};

export default App;
