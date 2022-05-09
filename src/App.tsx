import { useState } from 'react'
import logo from './assets/logo.svg';
import { UserInputs } from "./models/UserInputs";
import { HackedBefore } from "./steps/EverBeenHacked";
import { InstagramUsername } from "./steps/InstagramUsername";
import { IsThisYou } from "./steps/IsThisYou";
import { Result } from "./steps/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

    const [userInput, setUserInput] = useState<UserInputs>({});

    return (
        <>
            <header id='app-header'>
                <img src={logo} />
            </header>
            <main className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HackedBefore userInput={userInput} setUserInput={setUserInput} />} />
                    <Route path="/InstagramUsername" element={<InstagramUsername userInput={userInput} setUserInput={setUserInput}/>} />
                    <Route path="/IsThisYou" element={<IsThisYou userInput={userInput} setUserInput={setUserInput}/>} />
                    <Route path="/Result" element={<Result userInput={userInput} setUserInput={setUserInput} />} />
                </Routes>
            </BrowserRouter>
            </main>
        </>
    );
}

export default App
