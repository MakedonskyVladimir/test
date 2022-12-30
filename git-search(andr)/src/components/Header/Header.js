import React, { useState, useEffect } from "react";
import cl from "./Header.module.css"
import loupe from "../../img/loupe.png"

import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL;
// const text = process.env.VARIABLE;
// console.log(text)

const Header = ({ setAnswer }) => {
    const [question, setQuestion] = useState('Russia')

    const getAnswer = async () => {
        const { data: { items } } = await axios.get(`${baseUrl}?q=${question}`)


        setAnswer(items)


        // axios.get(`${baseUrl}?q=${question}`).then((res)=> {
        //     setAnswer(res.data.items)
        // })


    }

    useEffect(() => {
        getAnswer();
    }, [])


    return (
        <div className={cl.wrap}>
            <input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                className={cl.input}
                placeholder="  Начните вводить текст для поиска..." />
            <img
                src={loupe}
                className={cl.loupe}
                alt="img"
                onClick={() => getAnswer()} />
            <p className={cl.title}>Поиск репозиториев на Github</p>
        </div>
    )
}

export default Header