export interface LimitProps {
    limit: number;
    changeLimit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Limit = ({ limit, changeLimit }: LimitProps): JSX.Element => {
    return (
        <div className="limit">
            <span>By page:</span>
            <select value={limit} onChange={(e) => changeLimit(e)}>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select>
        </div>
    );
};
