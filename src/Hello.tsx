import {useNavigate, useParams} from "react-router-dom";
import {Character} from "./App";


export default function Hello(props: { characters: Character[] }) {


    const navigate = useNavigate();
    const params = useParams();
    const id: number = parseInt(params.id as string);
    const char = props.characters.find(char => (char.id === id));
    if (!char) {
        return <p>Error: Character not found</p>
    }

    return (
        <div>
            <h1>Hello {char.name}</h1>
            <button onClick={() => navigate("/")}>Back</button>
        </div>
    );
}
