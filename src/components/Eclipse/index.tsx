interface Props{
    active?: boolean;
    className?: string;
}
export function Eclipse({ active, className }: Props) {
    return (
        <>
            <div className={`w-3.5 h-3.5 rounded-full ${active ? "bg-white" : "bg-[#ffffff89]"} ${className}`} />
        </>
    )
}
