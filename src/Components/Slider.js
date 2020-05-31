import React from 'react';

function Slider(props) {
    const { value, handler } = props;
    return( 
        <div>
            <input type="range" min={0} max={100} value={props.value} className="slider" onChange={props.handler} />
            <div className="value" style={{
                "fontFamily": "Poppins",
                "color": "white",
                "fontSize" : "30px"
            }}>{props.value} mL</div>
        </div>

    )
}

export default Slider;