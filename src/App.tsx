import React from 'react';
import './App.css';
import logoImg from './images/logo.png';
import {Box} from "./components/Box.styled";
import {Card} from "./components/Card.styled";
import {CardImg} from "./components/CardImg.styled";
import {Menu} from "./components/Menu.styled";
import {BoxBtn} from "./components/BoxBtn.styled";
import {StyleBtn} from "./components/Button.styled";


function App() {
    return (
        <div className="App">
            <Box>
                <Card>
                    <CardImg src={logoImg}></CardImg>
                    <Menu>
                        <h1>Headline</h1>
                        <span>
                            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                        </span>
                    </Menu>

                    <BoxBtn>
                        <StyleBtn primery>See more</StyleBtn>
                        <StyleBtn outlined>Save</StyleBtn>
                    </BoxBtn>
                </Card>
            </Box>


        </div>
    );
}

export default App;











