import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes} from "react-router-dom";
import Hello from "./Hello";
import Root from "./Root";
import axios from "axios";

export type Character = {
    id: number,
    name: string
}


export default function App() {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/character")
                setCharacters(response.data.results)
            } catch (e: any) {
                console.error(e.message);
            }
        })();

    }, [])


    const [id, setId] = useState<string>("")


    return (
        <BrowserRouter>
            <h1>Namen</h1>

            <ul>
                {characters.map(character =>
                    <li key={character.id}><Link to={"/hello/" + character.id}>{character.name}</Link></li>)}
            </ul>
            <Routes>
                <Route path={"/"} element={<Root/>}/>
                <Route path={"/hello/:id"} element={<Hello characters={characters}/>}/>
            </Routes>
            <input type="number" onChange={event => setId(event.target.value)}/>
            <a href={"/hello/" + id}>
                <button>Submit</button>
            </a>

        </BrowserRouter>
    );
}


