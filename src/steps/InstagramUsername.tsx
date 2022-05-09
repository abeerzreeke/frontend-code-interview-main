import { FC } from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import { StepInput } from "../models/Step";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const InstagramUsername: FC<StepInput> = ({ userInput, setUserInput }) => {

    const setAnswer = (e: any) => {
        setUserInput({ ...userInput, instagramUsername: e.currentTarget.value })
    }
    
    return (
        <section className='step-2'>
            <header>
                <img className='service-icon' src={CustomerSupportUrl} />
                <span className='question_wrapper'>What is your Instagram username?</span>
            </header>
            <main>
                <input contentEditable onKeyUp={setAnswer} placeholder={"Press Your Instagram Username"} />
            </main>
            <div className='buttons'>
                <Link to="/">
                    <button className='prev-btn'>Previous<FontAwesomeIcon icon={faArrowLeft} /></button>
                </Link>
                <Link to="/IsThisYou">
                    <button className='next-btn'>Next<FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
            </div>
        </section>
    );
}