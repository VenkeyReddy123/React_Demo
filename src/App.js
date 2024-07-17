import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ApacheSolr from "./Componends/ApacheSolr";
import SendDataSolr from "./Componends/SendDataSolr";
import DataBaseData from "./Componends/DataBaseData";


function App() {
  return (
    <>
     
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<DataBaseData/>}></Route>
        <Route path='/SendData' element={<SendDataSolr/>}></Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
