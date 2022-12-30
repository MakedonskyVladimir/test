import React, { useState } from "react";

import star from '../../img/star.png';
import eye from '../../img/eye.png';
import pencil from '../../img/pencil.png';

import cl from "./Cart.module.css";


const Cart = ({ unit }) => {
    const [info, setInfo] = useState('')

    return (
        <div className={cl.wrap}>
            <a className={cl.project} href={unit.clone_url} target='_blanck'>
                <img className={cl.avatar} src={unit.owner.avatar_url}/>
            </a>
            <span className={cl.name} >{unit.owner.login}</span>
            <img src={star} className={cl.star} />
            <span className={cl.starcount} >{unit.stargazers_count}</span>
            <img src={eye} className={cl.eye} />
            <span className={cl.viewcount} >{unit.watchers_count}</span>
            <input className={cl.komment} value={info} onChange={event => setInfo(event.target.value)} />
            <img src={pencil} className={cl.pencil} alt="pencil" />
        </div>
    )
}

export default Cart