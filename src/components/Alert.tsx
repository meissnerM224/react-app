import type {ReactNode} from "react";

interface AlertProps {
    children: ReactNode;
}

const Alert = ({children: children}: AlertProps)=> {
    return (
        <div className="alert alert-primary alert-dismissible">
            <h1>{children}</h1>
            <button type="button" className={"btn btn-close"}></button>
        </div>
    );
}

export default Alert;