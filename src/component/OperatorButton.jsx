export function OperatorButton({ OperatorClick, handleEqual }) {
    const operator = ["+", "-", "*", "/"];
    return (
        <div className="flex flex-col justify-between h-full w-full">
            {operator.map((operator, index) => (
                <button
                    id="operatorBtn"
                    key={index}
                    className="rounded-[10px] h-12 w-full bg-orange-500 text-2xl"
                    value={operator}
                    onClick={(e) => OperatorClick(e.target.value)}
                >
                    {operator}
                </button>
            ))}
            <button
                id="equalBtn"
                className="rounded-lg h-12 w-full text-2xl font-semibold "
                onClick={() => {handleEqual()}}
            >
                =
            </button>
        </div>
    );
}
