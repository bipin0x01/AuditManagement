import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen"
import ClientListScreen from "./screens/ClientList";
import Sidebar from "./components/Sidebar";
import './responsive.css'

const App = () => {
  return (
    <Router>
      <Header />
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10 pt-4 mainbody">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/admin/clientlist" component={ClientListScreen} exact />
          </Container>
          <Footer/>
        </div>
      
    </Router>
  );
};

export default App;
