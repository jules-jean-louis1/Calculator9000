export function BeautifulScreen({expression, result}) {
    return(
        <div className="rounded-lg h-20 bg-slate-300 p-2">
            <div className="flex flex-col">
                <p className="text-right text-2xl text-zinc-400" id="calculation">{expression}</p>
                <p className="text-right text-2xl" id="result">{result}</p>
            </div>
        </div>
    )
}