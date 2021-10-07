import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
<<<<<<< HEAD
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
=======
import loginScreen from "./screens/loginScreen";
import HomeScreen from "./screens/HomeScreen"
import ClientListScreen from "./screens/ClientList";
>>>>>>> a9312faf5391955e7af6c7994456b172f6e09c80
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/admin/clientlist" component={ClientListScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
