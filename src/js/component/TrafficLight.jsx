
import React, {useState} from "react";

/*
export default class TrafficLight extends React.Component{

    constructor(){
        super();
        this.state = {
            clickedLight: null
        };
    }

    render(){
        console.log(this.state)
        let redExtraClass = "";
        if(this.state.clickedLight == "red") redExtraClass = "selected";
        let orangeExtraClass = "";
        if(this.state.clickedLight == "orange") orangeExtraClass = "selected";
        let greenExtraClass = "";
        if(this.state.clickedLight == "green") greenExtraClass = "selected";
        
        return <div className=" d-flex justify-content-center container-fluid">
			
                      <div id="trafficTop"></div>
                      <div id="lightsContainer">           
                         <div className={"red light "+redExtraClass} onClick={() => this.setState({ clickedLight: 'red'})}></div>
                         <div className={"orange light "+orangeExtraClass} onClick={() => this.setState({ clickedLight: 'orange'})}></div>
                         <div className={"green light "+greenExtraClass} onClick={() => this.setState({ clickedLight: 'green'})}></div></div>
					     
                </div>
			        
			
        
    }
}

*/

const TrafficLight = () =>{
	const [ selectedColor, setSelectedColor] = useState("orange");
	return( <div className="trafficLightClass container-fluid">
         <div id="trafficTop"></div>
		<div className="lightsContainer">
			<div 
				onClick = { () => setSelectedColor("red")}
				className={"light red " + (selectedColor === "red" ? "glow" : "")}>

			</div>

            <div onClick = { () => setSelectedColor("orange")} 
			className={"light orange " + (selectedColor === "orange" ? "glow" : "" )}>

			</div>

		

			<div onClick = { () => setSelectedColor("green")} 
			className={"light green " + (selectedColor === "green" ? "glow" : "" )}>

			</div>

            

           

		</div>
        </div>
	);
}

export default TrafficLight;



/*

const TrafficLight = () => {
  const [clickedLight, setClickedLight] = useState(null);

  const handleClick = (color) => {
    setClickedLight(color);
  };

  const getLightClassName = (color) => {
    return `light ${color} ${clickedLight === color ? "selected" : ""}`;
  };

  return (
    <div className="d-flex justify-content-center container-fluid">
      <div id="trafficTop"></div>
      <div id="lightsContainer">
        <div className={getLightClassName("red")} onClick={() => handleClick("glow")}></div>
        <div className={getLightClassName("orange")} onClick={() => handleClick("glow")}></div>
        <div className={getLightClassName("green")} onClick={() => handleClick("glow")}></div>
      </div>
    </div>
  );
};

export default TrafficLight;*/
