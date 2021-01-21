import React from 'react';

export default function HOC(Acomponent){
    return class extends React.Component{
        render(){
            return(
                <div style={{marginLeft:"50%",textAlign:"center",transform:"translate(-50%)"}}>
                    <h1>this is from higher order function</h1>
                    <Acomponent {...this.props}/>
                </div>
            );
        }
    }
}
