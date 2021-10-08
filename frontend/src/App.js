import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen"
import ClientListScreen from "./screens/ClientList";
import ClinetEditScreen from "./screens/ClientEditScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/admin/clientlist" component={ClientListScreen} />
          <Route path="/admin/clients/:id/edit" component={ClinetEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
