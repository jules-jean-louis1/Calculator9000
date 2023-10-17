export function BeautifulScreen({ expression, result }) {

    return (
        <div className="min-h-20 h-32 p-2" id="beautyScreen">
            <div className={`flex flex-col justify-end w-full`}>
                <h1 className="text-right text-3xl font-semibold text-[#9fa8cc]">{expression}</h1>
                <h1 className="text-right text-5xl font-semibold text-[#afb9e1]">{result}</h1>
            </div>
        </div>
    );
}
