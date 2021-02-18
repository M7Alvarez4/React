import React from 'react';


//create configuration object
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.let, new Date().getMonth());
    //destructures the elements in the config object
    const { text, iconName } = seasonConfig[season]; // { text, iconName }

    return (
            <div>
                <i className={`massive ${iconName} icon`} />
                <h1>{text}</h1>
                <i className={`massive ${iconName} icon`} />
            </div>
        );

};

export default SeasonDisplay;