import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/pages/HomePage";
import FavoritePage from "./components/pages/FavoritePage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes path='/'>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favorites' element={<FavoritePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
