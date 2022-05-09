import { FC } from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import profilePictureUrl from '../assets/profilepic.jpeg';
import { StepInput } from "../models/Step";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const RADIO_BUTTON_GROUP = "is-this-you";
export const IsThisYou: FC<StepInput> = ({ userInput, setUserInput }) => {

    const setAnswer = (answer: boolean) => {
        setUserInput({ ...userInput, isThisYou: answer });
    }

    return (
        <section className='step-3'>
            <header>
                <img className='service-icon' src={CustomerSupportUrl} />
                <span className='question_wrapper'>Is this you?</span>
            </header>
            <main>
                <div id='profile-details'>
                    <img className='profile-pic' src={profilePictureUrl} />
                    <span id='user-name'>{userInput.instagramUsername}</span>
                </div>
                <div id='is-this-you-questions'>
                    <label>
                        <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(true)}
                            defaultChecked={userInput.isThisYou} />
                        <span className='answer'>Yes, that's me!</span>
                    </label>
                    <label>
                        <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(false)}
                            defaultChecked={userInput.isThisYou === false} />
                        <span className='answer'>No, that's somebody else</span>
                    </label>
                </div>
            </main>
            <div className='buttons'>
                <Link to="/InstagramUsername">
                    <button className='prev-btn'>Previous <FontAwesomeIcon icon={faArrowLeft}/></button>
                </Link>
                <Link to="/Result">
                    <button className='next-btn'>Submit<FontAwesomeIcon icon={faArrowRight}/></button>
                </Link>
            </div>
        </section>
    );
}