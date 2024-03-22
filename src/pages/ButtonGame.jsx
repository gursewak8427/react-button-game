import React, { useState, useEffect } from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { getButtons, makeAnimatedBeforeRemove, setButtonColorWithId, shuffleArray } from '../static/js/main';
import { BUTTON_COLORS } from '../static/constants';

export const ButtonGame = ({ data }) => {
    const [buttons, setButtons] = useState([]);
    const [selectedButtons, setSelectedButtons] = useState([]);

    useEffect(() => {
        console.log(Object.keys(data))
        if (Object.keys(data).length < 2) {
            alert("Min. 2 key-pair required")
            return;
        }
        if (Object.keys(data).length > 100) {
            alert("Max. 100 key-pair are allowed")
            return;
        }
        const initialButtons = getButtons(data);
        const shuffledButtons = shuffleArray(initialButtons);
        setButtons(shuffledButtons);
    }, [data]);


    // Function to handle button click
    const handleButtonClick = (button) => {

        if (selectedButtons.length == 2) {
            setButtonColorWithId(selectedButtons[1], BUTTON_COLORS.DEFAULT)
            setButtonColorWithId(selectedButtons[0], BUTTON_COLORS.DEFAULT)
        }

        if (selectedButtons.length == 0 || selectedButtons.length == 2) { // It is first button of a PAIR
            // Make it blue 
            setButtonColorWithId(button.label, BUTTON_COLORS.SELECTED_BUTTON)
            setSelectedButtons([button.label])
        } else { // It is a second button of a PAIN

            if (selectedButtons.includes(button.label)) { // If same button is clicked then remove selection

                setButtonColorWithId(button.label, BUTTON_COLORS.DEFAULT)
                setSelectedButtons([]) // make it empty

            } else { // Another button is clicked

                let firstButton = buttons.reduce((prev, btn) => btn.label == selectedButtons[0] ? btn : prev)
                let secondButton = button;

                setSelectedButtons([firstButton.label, secondButton.label])

                if (secondButton.type === 'country' && firstButton.label === data[secondButton.label] || secondButton.type == "capital" && secondButton.label == data[firstButton.label]) {
                    setSelectedButtons([]) // make this empty after 2nd selection right

                    // Make both green
                    setButtonColorWithId(firstButton.label, BUTTON_COLORS.RIGHT_BUTTONS)
                    setButtonColorWithId(secondButton.label, BUTTON_COLORS.RIGHT_BUTTONS)

                    makeAnimatedBeforeRemove(firstButton)
                    makeAnimatedBeforeRemove(secondButton)
                    setTimeout(() => {
                        setButtons([...buttons.filter(btn => ![firstButton.label, secondButton.label].includes(btn.label))])
                    }, 1000);

                    return;
                }

                // Wrong Selection
                setButtonColorWithId(firstButton.label, BUTTON_COLORS.WRONG_BUTTONS)
                setButtonColorWithId(secondButton.label, BUTTON_COLORS.WRONG_BUTTONS)
                return;
            }

        }
    };

    // Render buttons
    const renderButtons = () => {
        return buttons.map((button, index) => (
            <PrimaryButton key={button.label} button={button} handleButtonClick={handleButtonClick} />
        ));
    };

    // Check if all buttons are matched
    const allButtonsMatched = () => {
        return buttons.length == 0;
    };

    return (
        <div id='button_game_wrapper'>
            <h1>Select Two Button with pair of country-capital</h1>
            {renderButtons()}
            {allButtonsMatched() && <p>Congratulations! You matched all buttons!</p>}
        </div>
    );
}

