import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Homescreen from "./screens/Homescreen";
import ProductScreen from "./screens/ProductScreen";
import ProjectCreateScreen from "./screens/ProjectCreateScreen";
import TaskCreateScreen from "./screens/TaskCreateScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Homescreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/projects/create" element={<ProjectCreateScreen />} />
            <Route
              path="/project/:id/task/create"
              element={<TaskCreateScreen />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
