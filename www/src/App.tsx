import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ServerPage from "./pages/server";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ServerPage />} path="/server/*" />
    </Routes>
  );
}

export default App;
