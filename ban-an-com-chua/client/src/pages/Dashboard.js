import ChatContainer from "../components/ChatContainer";
import TinderCard from "react-tinder-card";
import { useState } from "react";

const Dashboard = () => {
  const characters = [{name: "tung", url: ""}, {name: "vu", url: ""}];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen")
  }

  return (
    <div className={"dashboard"}>
      <ChatContainer />
      <div className={"swipe-container"}>
        <div className={"card-container"}>
          {
            characters.map( character => {
              <TinderCard 
              className="swipe" 
              key={characters.name} 
              onSwipe={(dir)=>{swiped(dir, character.name)}}
              onCardLeftScreen={()=>outOfFrame(character.name)}
              >
                <div style={""} className="card">
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            } )
          }
          <div className="swipe-info">
            {lastDirection ? <p>You swipe {lastDirection}</p> : <p></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;