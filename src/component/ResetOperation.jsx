export function ResetOperation({resetClick, DeleteClick, saveOperation}) {
    
    return(
        <div className={`flex w-full space-x-4 pb-2`}>
            <button
                id="resetBtn"
                className="text-2xl font-semibold h-12 w-[29%]"
                onClick={() => {resetClick()}}
            >
                C
            </button>
            
            <button 
                id="deleteBtn"
                className="w-[29%] h-12 text-3xl font-semibold" onClick={() => DeleteClick()}>
                DEL
            </button>
            <button 
                id="saveBtn"
                className="w-[29%] h-12 text-2xl font-semibold" onClick={() => saveOperation()}>
                Save
            </button>
        </div>
    )
}