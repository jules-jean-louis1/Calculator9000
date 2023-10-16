export function OperatorButton() {
    const operator = ["+", "-", "*", "/"]
    return(
        <>
            {operator.map((operator, index)=> {
                return <button key={index} className="rounded-lg h-12 w-12 bg-orange-500">{operator}</button>
            })}
        </>
    )
}