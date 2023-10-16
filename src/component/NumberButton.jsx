export function NumberButton() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="flex flex-wrap">
            {numbers.map((number, index) =>
                <button key={index} className="rounded-lg h-12 w-12 bg-slate-300">{number}</button>
            )}
        </div>
    );
}
