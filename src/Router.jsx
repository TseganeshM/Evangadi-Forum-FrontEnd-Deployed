import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import  AskQuestion from "./Pages/AskQuestion/AskQuestion"
import Answer from "./Pages/Answer/Answer";


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/questions" element={<AskQuestion />} />
      <Route path="/answer/:id" element={<Answer />} />
    </Routes>
  );
}

export default Routing;
