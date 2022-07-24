import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Index from './pages/Index';
import Contact from './pages/Contact';
import Userlist from './components/Userlist';

function App() {
  const users=[
    {
      id:1,
      username:"Laman",
      age:23
    },
    {
      id:2,
      username:"Laman1",
      age:23
    },
    {
      id:3,
      username:"Laman2",
      age:23
    }
  ]
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/users' element={<Userlist userlist={users}/>}/>
        <Route path='/contact' element={<Contact/>}/> 
       </Routes> 
       
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
