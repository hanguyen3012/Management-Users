import "./App.css";
import ListUsers from "./components/organisms/ListUsers/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from "./components/organisms/CreateUser/index";
import EditUser from "./components/organisms/EditUser/index";
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path="/create" element={<CreateUser/>} />
        <Route path="/" element={<ListUsers/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;
