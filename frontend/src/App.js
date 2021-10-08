import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen"
import ClientListScreen from "./screens/ClientList";
import ClientEditScreen from "./screens/ClientEditScreen";
import ClientScreen from "./screens/ClientScreen";
import Sidebar from "./components/Sidebar";
import './responsive.css'

const App = () => {
  return (
    <Router>
      <Header />
          <Sidebar />
        <div className="col-xl-9 col-lg-8 col-md-7 p-4 mainbody">
          <Route path="/login" component={LoginScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/admin/clientlist" component={ClientListScreen} />
          <Route path="/admin/clients/:id/edit" component={ClientEditScreen} />
          <Route path="/admin/clients/:id/info" component={ClientScreen} />
        </Container>
      </main>
      <Footer />
          <Route path="/admin/clientlist" component={ClientListScreen} exact />
          <Footer/>
        </div>
      
    </Router>
  );
};

export default App;
