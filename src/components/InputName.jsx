import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';

const InputName = () => {
    const [userName, setUserName] = useState('')

    const navigate = useNavigate()
    const dispath =useDispatch()
    const enterName= () =>{
        dispath(changeName(userName))
        navigate('/pokedex')
        
    }

    return (
        <div className='bienvenida'>
        <div>
            <h1> Hello trainer!, write your name please </h1>
            <input type="text" onChange={e => setUserName(e.target.value)} value={userName} />
            <button onClick={enterName}> enter  </button>
        </div>

        </div>
    );
};

export default InputName;