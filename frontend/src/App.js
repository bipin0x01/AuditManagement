import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import loginScreen from "./screens/loginScreen";
import HomeScreen from "./screens/HomeScreen"
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={loginScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
