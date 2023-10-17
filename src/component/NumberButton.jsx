export function NumberButton({ NumberClick }) {
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."];
    const buttonRows = [numbers.slice(0, 3), numbers.slice(3, 6), numbers.slice(6,9), numbers.slice(9,11)];

    return (
        <div className="flex flex-col justify-around items-stretch space-y-4 h-full pt-2">
            {buttonRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-between h-full w-full">
                    {row.map((number, index) => (
                        <button
                            id="numberBtn"
                            key={index}
                            className={`h-12 text-2xl ${
                                number === 0 || number === '.'? "w-[48%]" : "w-[29%]"
                            }`}
                            value={number}
                            onClick={(e) => NumberClick(e.target.value)}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}
