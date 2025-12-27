import {useState} from "react";

interface ListProp {
    items: Array<string>;
    title: string;
}


function ListGroup({items, title}: ListProp) {
    const [selectedIndex, setState] = useState(-1);

    return (
        <>
            <h1>{title}</h1>
            {items.length === 0 && "No Cities found"}
            <ul className="list-group">
                {
                    items.map((item: string, i: number) => <li
                        className={selectedIndex === i ? 'list-group-item active' : "list-group-item"}
                        key={i}
                        onClick={() => setState(i)}
                    >{item}</li>)
                }
            </ul>
        </>
    );
}

export default ListGroup;