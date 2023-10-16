export function ResetOperation({resetClick}) {
    return(
        <>
            <button
                className="rounded-[10px] m-2 text-2xl font-semibold h-12 w-12 bg-orange-500"
                onClick={() => {resetClick()}}
            >
                C
            </button>
        </>
    )
}