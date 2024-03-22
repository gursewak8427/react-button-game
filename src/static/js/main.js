// @desc : get list of buttons from json_data
export const getButtons = (data) => {
    return Object.entries(data).flatMap(([country, capital]) => ([
        { label: country, type: 'country', matched: false },
        { label: capital, type: 'capital', matched: false }
    ]));
}

// @desc : Shuffle buttons in random order
export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// @desc : Change color of button with id
//         *Here button-label is the ID of the button 
export const setButtonColorWithId = (label, color) => {
    document.getElementById(label).style.background = color;
}

// @desc : Add class to show animation on button
export const makeAnimatedBeforeRemove = (button) => {
    let btnElement = document.getElementById(button.label);
    btnElement.classList.add("animated-out")
    setTimeout(() => {
        btnElement.classList.remove("animated-out")
    }, 1000);
}

// @desc : Game Json Data
export const gameData = () => {
    return {
        "Germany": "Berlin",
        "India": "Delhi",
        "USA": "Washington D.C.",
        "China": "Beijing",
        "Brazil": "Brasília",
        "France": "Paris",
        "Japan": "Tokyo",
        "Australia": "Canberra",
        "Canada": "Ottawa",
        "Russia": "Moscow"
    }

}