import { Eclipse } from "../Eclipse";

export function Loading() {
    return (
        <div className="flex gap-1.5 items-end justify-center w-screen h3.5 absolute bottom-14">
            <Eclipse active className="animate-bounce"/>
            <Eclipse className="animate-bounce_1s"/>
            <Eclipse className="animate-bounce_2s"/>
        </div>
    );
}
