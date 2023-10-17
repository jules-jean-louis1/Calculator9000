export function ResetOperation({resetClick}) {
    return(
        <>
            <button
                className="rounded-[10px] text-2xl font-semibold h-12 w-[29%] bg-orange-500"
                onClick={() => {resetClick()}}
            >
                C
            </button>
        </>
    )
}