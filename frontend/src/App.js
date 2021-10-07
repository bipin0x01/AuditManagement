import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import homeScreen from "./screens/homeScreen";
import loginScreen from "./screens/loginScreen"
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={loginScreen} />
          <Route path="/" component={homeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
