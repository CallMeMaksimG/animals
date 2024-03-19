import { useEffect, useState } from 'react';
import './App.css';
import { Animals } from './components/Animals';
import { Animal } from './api';
import { requestAnimals } from './api';
import { Filter } from './components/Filter';
import { Limit } from './components/Limit';
import { Pagination } from './components/Pagination';

export default function App() {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [animalInput, setAnimalInput] = useState<string>('');
    const [amountInput, setAmountInput] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(4);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [offset, setOffset] = useState<number>(0);
    const pageQty = Math.ceil(11 / limit);

    const changeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLimit(Number(e.target.value));
        setOffset(0);
        setCurrentPage(1);
    };

    const nextPage = () => {
        if (currentPage < pageQty) {
            setCurrentPage((prev) => prev + 1);
            setOffset((prev) => prev + Number(limit));
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
            setOffset((currentPage - 2) * limit);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        requestAnimals({
            animal: animalInput,
            amount: amountInput,
            limit: limit,
            offset: offset,
        })
            .then((data: Animal[]) => {
                setAnimals(data);
                setIsLoading(false);
            })
            .catch((error: Error) => setErrorMessage(error.message));
    }, [animalInput, amountInput, limit, currentPage]);
    return (
        <>
            <Filter
                setAnimalInput={setAnimalInput}
                setAmountInput={setAmountInput}
                setCurrentPage={setCurrentPage}
                setOffset={setOffset}
                animalInput={animalInput}
                amountInput={amountInput}
            />
            <div className="control-bar">
                <Limit limit={limit} changeLimit={changeLimit} />
                <Pagination
                    currentPage={currentPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    pageQty={pageQty}
                />
            </div>
            {errorMessage ? (
                <p>{errorMessage}</p>
            ) : isLoading ? (
                'Loading...'
            ) : animals.length > 0 ? (
                <Animals animals={animals} />
            ) : (
                'Animals not found'
            )}
        </>
    );
}
