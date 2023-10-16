export function OperatorButton({ OperatorClick }) {
    const operator = ["+", "-", "*", "/"];
    return (
        <div className="flex flex-col">
            {operator.map((operator, index) => (
                <button
                    key={index}
                    className="rounded-[10px] h-12 w-12 bg-orange-500 m-2 text-2xl"
                    value={operator}
                    onClick={(e) => OperatorClick(e.target.value)}
                >
                    {operator}
                </button>
            ))}
        </div>
    );
}
