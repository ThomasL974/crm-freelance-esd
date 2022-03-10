import InvoiceList from "./components/InvoiceList";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomerList from "./components/CustomerList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InvoiceList/>}/>
          <Route path="/customers" element={<CustomerList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
