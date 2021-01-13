import React from "react";
import Shows from "./shows"
import b99 from "./images/b99.jpg"
import friends from "./images/friends.jpg"
import office from "./images/theoffice.jpg"
import bbt from "./images/bbt.jpg"

class AllShows extends React.Component {
    render() {
        var showNames = ["brooklyn 99", "friends", "the office", "the big band theory"];
        var showDetails = ["Brooklyn Nine-Ninefollows the exploits of hilarious Det.Jake Peralta and his diverse,lovable colleagues as they police the NYPD's 99th Precinct.Ray Holt, an eccentric commanding officer, and his diverse and quirky team of odd detectives solve crimes in Brooklyn, New York City.total seasons: 7 and going", "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.", "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.", "The lives of four socially awkward friends, Leonard, Sheldon, Howard and Raj, take a wild turn when they meet the beautiful and free-spirited Penny."];
        var showPosters=[b99,friends,office,bbt];
        var showRatings=[8.4,8.9,8.9,8.1];
        var output=[];
        for (let i= 0; i<showNames.length; i++) {
            output.push(<Shows name={showNames[i]} details={showDetails[i]} poster={showPosters[i]} rating={showRatings[i]}/>);
        }
        return (
            <div>
                <p style={{fontSize:"35px",fontFamily:"impact",textAlign:"center",color:"#fff8f4"}}>sitcom tv shows</p>
                {output}
            </div>
        );
    }
}

export default AllShows;