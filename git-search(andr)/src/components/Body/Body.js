import React from "react";
import Cart from "../Cart/Cart";
import cl from "./Body.module.css"

const Body = ({ answer = [] }) => (
    <div className={cl.body}>
        {answer.map(unit => (
            <Cart unit={unit} key={unit.id} />
        ))}
    </div>
)


export default Body