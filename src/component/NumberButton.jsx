export function NumberButton({ NumberClick }) {
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."];
    const buttonRows = [numbers.slice(0, 3), numbers.slice(3, 6), numbers.slice(6,9), numbers.slice(9,11)];

    return (
        <div className="flex flex-col items-center">
            {buttonRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center w-full">
                    {row.map((number, index) => (
                        <button
                            key={index}
                            className={`rounded-[10px] h-12 w-12 m-2 text-2xl ${
                                number === 0 || number === '.'? "w-1/2 bg-slate-300" : "bg-slate-300"
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
