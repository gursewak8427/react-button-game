export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const getButtons = (data) => {
    return Object.entries(data).flatMap(([country, capital]) => ([
        { label: country, type: 'country', matched: false },
        { label: capital, type: 'capital', matched: false }
    ]));
}

export const setButtonColorWithId = (label, color) => {
    document.getElementById(label).style.background = color;
}

export const makeAnimatedBeforeRemove = (button) => {
    let btnElement = document.getElementById(button.label);
    btnElement.classList.add("animated-out")
    setTimeout(() => {
        btnElement.classList.remove("animated-out")
    }, 1000);
}

export const game_data = {
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
