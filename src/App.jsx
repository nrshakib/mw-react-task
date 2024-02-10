import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Index from "./components/Index.jsx";
import Problem1 from "./components/problem-1/Problem-1.jsx";
import Problem2 from "./components/problem-2/Problem-2.jsx";
import ModalA from "./components/problem-2/components/ModalA.jsx";
import ModalB from "./components/problem-2/components/ModalB.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
          <Route path="problem-2/all-contacts" element={<ModalA />} />
          <Route path="problem-2/us-contacts" element={<ModalB />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
