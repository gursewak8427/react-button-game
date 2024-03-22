import React, { useState, useEffect } from 'react';
import { ButtonGame } from './ButtonGame';
import { game_data } from '../static/js/main';

export const Home = () => {
    return (<>
        <ButtonGame data={game_data} />
    </>)
}