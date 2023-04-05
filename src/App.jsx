import {  Container } from "@mui/material";
import {  Navbar} from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from './pages';

export default function App() {

  return (
   <>
       <Navbar />
    <Container sx={{ border: 3, boxShadow: 3, pb: 2, backgroundColor: "#f2f2f2", mt: 3 }}>
      <h1 className="titulo">Material UI</h1>
      <Routes>                   
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
      </Routes> 
    </Container>
   
   </>
  );
}
