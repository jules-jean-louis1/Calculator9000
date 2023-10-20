/**
 * A component that displays the expression and result of a calculator operation in a beautiful screen.
 * @param {Object} props - The props object containing the expression and result to be displayed.
 * @param {string} props.expression - The expression to be displayed.
 * @param {string} props.result - The result to be displayed.
 * @returns {JSX.Element} - The JSX code for the BeautifulScreen component.
 */

export function BeautifulScreen({ expression, result, errorF, messageError }) {
    return (
        <div className="min-h-20 h-32 p-2" id="beautyScreen">
            <div className={`flex flex-col justify-end w-full`}>
                <h1 className="text-right text-3xl font-semibold text-[#9fa8cc]">{expression}</h1>
                <h1 className="text-right text-5xl font-semibold text-[#afb9e1]">{result}</h1>
            </div>
            {errorF && <h1 className="text-right text-xl font-semibold text-red-400">{messageError}</h1> }
        </div>
    );
}