export function BeautifulScreen({ expression, result }) {

    return (
        <div className="rounded-[10px] min-h-20 h-24 bg-slate-200 p-2">
            <div className={`flex flex-col justify-end w-full`}>
                <h1 className="text-right text-4xl font-semibold text-black">{expression}</h1>
                <h1 className="text-right text-5xl font-semibold text-black">{result}</h1>
            </div>
        </div>
    );
}
