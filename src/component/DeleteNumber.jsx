export function DeleteNumber({DeleteClick})
{
    return(
        <button className="w-[29%] h-12 bg-orange-500 text-3xl font-semibold rounded-[10px]" onClick={() => DeleteClick()}>
            DEL
        </button>
    );
}