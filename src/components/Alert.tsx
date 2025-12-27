import type {ReactNode} from "react";

interface AlertProps {
    children: ReactNode;
}

const Alert = ({children: children}: AlertProps)=> {
    return (
        <div className="alert alert-primary">
            <h1>{children}</h1>
        </div>
    );
}

export default Alert;