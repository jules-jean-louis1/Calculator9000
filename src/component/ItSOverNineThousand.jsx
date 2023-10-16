export function ItSOverNineThousand({ result }) {
    const isOverNineThousand = result > 9000;

    return (
        <>
            {isOverNineThousand && (
                <p className="text-center text-2xl font-semibold text-zinc-400">
                    It's over 9000!!!
                </p>
            )}
        </>
    );
}
