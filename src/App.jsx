// localhost config:
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ValidateEmail from "./ValidateEmail";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/email-validate" element={<ValidateEmail />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// front deployed config:
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import ValidateEmail from "./ValidateEmail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/emailValidate" element={<ValidateEmail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
