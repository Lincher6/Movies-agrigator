import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';

export const PlayerContext = createContext();

export function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    const closeHandle = () => setShowPlayer(false)

    return showPlayer &&
        ReactDOM.createPortal(
            <Overlay onClick={closeHandle} data-testid={'player'}>
                <Inner onClick={event => event.stopPropagation()} >
                    <video id="netflix-player" controls>
                        <source src={src} type="video/mp4" />
                    </video>
                    <Close onClick={closeHandle}/>
                </Inner>
            </Overlay>,
            document.body
        )
};

Player.Button = function PlayerButton({ anotherButton, ...restProps }) {
    const { setShowPlayer } = useContext(PlayerContext);
    const Component = anotherButton || Button

    return (
        <Component onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
            Play
        </Component>
    );
};