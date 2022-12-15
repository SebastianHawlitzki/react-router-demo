import {useNavigate, useParams} from "react-router-dom";
import {Character} from "./App";


export default function Hello(props: { characters: Character[] }) {


    const navigate = useNavigate();
    const params = useParams();

    const id: number = parseInt(params.id as string);
    const charFound = props.characters.find(char => (char.id === id));
    if (!charFound) {
        return <p>Error: Character not found</p>
    }

    return (
        <div>
            <h1>Hello {charFound.name}</h1>
            <button onClick={() => navigate("/")}>Back</button>
        </div>
    );
}
