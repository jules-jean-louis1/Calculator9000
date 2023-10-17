export function EqualButton({handleEqual}) {
    return(
        <>
            <button
                className="rounded-lg h-12 bg-orange-500 text-2xl font-semibold "
                onClick={() => {handleEqual()}}
            >
                =
            </button>
        </>
    )
}