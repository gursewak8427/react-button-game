import React, { useState, useEffect } from 'react';
import { ButtonGame } from './ButtonGame';
import { gameData } from '../static/js/main';

export const Home = () => {
    return (<>
        <ButtonGame data={gameData()} />
    </>)
}