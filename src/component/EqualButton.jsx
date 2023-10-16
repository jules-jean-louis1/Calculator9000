export function EqualButton({handleEqual}) {
    return(
        <>
            <button
                className="rounded-lg h-12 w-12 bg-orange-500 m-2 text-2xl font-semibold "
                onClick={() => {handleEqual()}}
            >
                =
            </button>
        </>
    )
}