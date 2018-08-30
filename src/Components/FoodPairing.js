import React from "react";
function FoodPairing(props) {
    const pairings = props.pairings;
    const list = pairings.map((pairing) => <li key={pairing[0] + pairing[1]}>{pairing}</li>);

    return (
        <div>
            <h5>Try with: </h5>
            <ul>{list}</ul>
        </div>
    );
}

export default FoodPairing