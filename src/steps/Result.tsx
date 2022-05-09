import { Component, FC } from 'react';
import { StepInput } from "../models/Step";

export const Result: FC<StepInput> = ({ userInput }) => {

    return (
        <section className='result'>
            Answers: {JSON.stringify(userInput)}
        </section>
    );

};