import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
}

const Title = (props: TitleProps) => {
    return(
        <div className="text-4xl font-bold text-black pt-24">
            {props.children}
        </div>
    )
}
export default Title;