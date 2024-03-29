import React from 'react';
import { testDebounce } from '../helpers/helpers';

export interface FilterProps {
    setAnimalInput: (value: string) => void;
    setAmountInput: (value: string) => void;
    setCurrentPage: (value: number) => void;
    setOffset: (value: number) => void;
    animalInput: string;
    amountInput:string;
    updateFilterAnimals: (value: string) => void;
    updateFilterAmount: (value: string) => void;
}

export const Filter = ({
    setAnimalInput,
    setAmountInput,
    setCurrentPage,
    setOffset,
    animalInput,
    amountInput,
    updateFilterAnimals,
    updateFilterAmount
    
}: FilterProps): JSX.Element => {
    const animalFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnimalInput(e.target.value);
        setCurrentPage(1);
        setOffset(0);
        updateFilterAnimals(e.target.value);
    };
    const amountFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmountInput(e.target.value);
        setCurrentPage(1);
        setOffset(0);
        updateFilterAmount(e.target.value);
    };
    return (
        <div className="filter">
            <input
                onChange={animalFilterHandler}
                type="text"
                placeholder="Animals"
                value={animalInput}
            />
            <input
                onChange={amountFilterHandler}
                type="number"
                placeholder="Amount"
                value={amountInput}
            />
        </div>
    );
};
