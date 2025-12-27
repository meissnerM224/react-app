import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import PrimaryButton from "./components/PrimaryButton";

function App() {

    const cities = [
        "Aachen",
        "Berlin",
        "Bremen",
        "Hamburg",
    ];
    const colors=["red", "green", "blue"];
    return (
        <>
            <ListGroup items={cities} title={"Cities"}/>
            <Alert> Hello <span>World!</span> </Alert>
            <PrimaryButton text={"Press"} />
            <ListGroup items={colors} title={"Colors"}/>

        </>
    );
}
export  default App;