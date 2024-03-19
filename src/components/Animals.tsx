import { Animal } from '../api';

export interface AnimalProps {
    animals: Animal[];
}

export const Animals = ({ animals }: AnimalProps): JSX.Element => {
    return (
        <div>
            {animals.map((animal: Animal) => (
                <div key={animal.id}>
                    {animal.animal}, {animal.amount}
                </div>
            ))}
        </div>
    );
};
