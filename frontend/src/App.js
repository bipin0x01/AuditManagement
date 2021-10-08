import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen"
import ClientListScreen from "./screens/ClientList";
<<<<<<< HEAD
import Sidebar from "./components/Sidebar";
import './responsive.css'

=======
import ClinetEditScreen from "./screens/ClientEditScreen";
>>>>>>> eb8509c5293e92a904daf4e3cca764331222e081
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
<<<<<<< HEAD
          <Route path="/admin/clientlist" component={ClientListScreen} exact />
          </Container>
          <Footer/>
        </div>
      
=======
          <Route path="/admin/clientlist" component={ClientListScreen} />
          <Route path="/admin/clients/:id/edit" component={ClinetEditScreen} />
        </Container>
      </main>
      <Footer />
>>>>>>> eb8509c5293e92a904daf4e3cca764331222e081
    </Router>
  );
};

export default App;
