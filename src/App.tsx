import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedRutes from "./routes/SharedRutes";
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SharedRutes />}>
            <Route path="/" element={<HomePage />} index />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
