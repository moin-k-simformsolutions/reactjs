import React, { useState } from 'react';
import storeInstance from './countStore.js';
import {useObserver} from "mobx-react";

const Count=()=>{
    // console.log(storeInstance);
    const [no,setNo]=useState(1);
    return useObserver(
        ()=>(
            <div>
                <h1 style={{color:"f9f9f9"}}>count:{storeInstance.totalCount}</h1>
                <select onChange={(e)=>{setNo(Number(e.target.value))}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br></br>
                <button onClick={()=>{storeInstance.increseCount(no)}}>increse</button>
                <button onClick={()=>{storeInstance.decreseCount(no)}}>decrese</button>
                <button onClick={()=>{storeInstance.reset()}}>reset</button>
            </div>
        )
    )
}

export default Count;