export function History({ history, clearHistory }) {
    const buttonClose = () => {
        document.getElementById("modalHistory").close();
    }
    const buttonOpen = () => {
        document.getElementById("modalHistory").showModal();
    }
    return (
        <div className="pt-2">
            <button className="text-2xl font-semibold h-12 w-full rounded-[10px] border border-[#afb9e1] text-white" id="historyBtn" onClick={() => buttonOpen()}>Historique de calculs</button>
            <dialog className="h-1/3 w-1/4 rounded-[10px] border border-[#afb9e1] p-2" id="modalHistory">
                <div className="flex items-center justify-between">
                    <button className="text-2xl font-semibold" id="clearBtn" onClick={() => clearHistory()}>Clear</button>
                    <button className="text-2xl font-semibold" id="closeBtn" onClick={() => buttonClose()}>X</button>
                </div>
                <div className="flex flex-col justify-between h-full w-full">
                    {history.map((history, index) => (
                        <div key={index} className="flex flex-row justify-between h-full w-full">
                            <h1 className="text-left text-2xl font-semibold text-[#9fa8cc]">{history.expression}</h1>
                            <h1 className="text-right text-2xl font-semibold text-[#afb9e1]">{history.result}</h1>
                        </div>
                    ))}
                </div>
            </dialog>
        </div>
    );
}