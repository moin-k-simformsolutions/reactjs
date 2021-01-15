import React, { useState } from "react";
import b99 from "./images/b99.jpg"
import friends from "./images/friends.jpg"
import office from "./images/theoffice.jpg"
import bbt from "./images/bbt.jpg"

const SelectShow = () => {
    const [show, setShow] = useState("");
    //=====^state=^function==========^default value/function value
    return (
        <div>
            {/* ==============\/\/\/event listener\/\/\/ */}
            <select onChange={e => setShow(e.target.value)}
                style={{
                    marginLeft: "50%",
                    marginTop: "5%",
                    fontSize: "20px",
                    transform: "translate(-50%)",
                    minWidth: "20%",
                    fontFamily: "impact"
                }}>
                <option value={""}>--select a show--</option>
                <option value={friends}>friends</option>
                <option value={office}>office</option>
                <option value={b99}>brooklyn 99</option>
                <option value={bbt}>big bang theory</option>
            </select><br></br>
            {show === "" ? null : <img src={show} alt="show"
                style={{
                    marginLeft: "50%",
                    transform: "translate(-50%)",
                    marginTop: "5%"
                }}></img>}
        </div>
    );
}

export default SelectShow;