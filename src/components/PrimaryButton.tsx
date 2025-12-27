
interface Props {
    text:string;
}

const PrimaryButton = ({text}:Props) => {
    return (
        <button type="button" className="btn btn-dark">
            {text}
        </button>
    );
};

export default PrimaryButton;