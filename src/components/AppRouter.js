import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import Navigation from './Navigation';
import Footer from "./Footer";
import {useState} from "react";
import Items from "../routes/Items";

const AppRouter = () => {
    const [display,setDisplay] = useState(true);
    const [list,setList] = useState([]);

    const listState = (args) => {
        setList(args);
    }

    const displayOff = () => {
        setDisplay(false);
    }
    const displayOn = () => {
        setDisplay(true);
    }
  return (
    <Router>
        {display ? <Navigation listState={listState} /> : ''}
      <Routes>
        <Route path="/" element={<Home  displayOn={displayOn}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth displayOff={displayOff} />} />
          <Route path="/items" element={<Items list={list}/>}></Route>
      </Routes>
        {display ? <Footer /> : ''}
    </Router>
  );
};

export default AppRouter;
