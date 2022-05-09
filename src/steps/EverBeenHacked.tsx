import { FC } from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import { StepInput } from "../models/Step";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const RADIO_BUTTON_GROUP = "hacked-before-radio";

export const HackedBefore: FC<StepInput> = ({ userInput, setUserInput }) => {

    const setAnswer = (answer: boolean) => {
        setUserInput({ ...userInput, hackedBefore: answer });
    }

    return (
        <section className='step-1 active'>
            <header>
                <img className='service-icon' src={CustomerSupportUrl} />
                <span className='question_wrapper'>Have you ever been hacked before?</span>
            </header>
            <main>
                <label>
                    <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(true)}
                        defaultChecked={userInput.hackedBefore} />
                    <span className='answer'>Yes, I've been hacked before</span>
                </label>
                <label>
                    <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(false)}
                        defaultChecked={userInput.hackedBefore === false} />
                    <span className='answer'>No, I've never been hacked</span>
                </label>
            </main>
            <div className='buttons'>
                <Link to="/InstagramUsername">
                    <button className='next-btn'>Next<FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
            </div>
        </section>
    );
}