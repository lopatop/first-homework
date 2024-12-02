import styled, {css} from "styled-components";

type StyleBtnPropsType = {
    primery?: boolean
    outlined?: boolean
}


export const StyleBtn = styled.button <StyleBtnPropsType>`
    border-radius: 5px;
    border: none;
    width: 86px;
    height: 30px;
    font-weight: 700;
    font-size: 10px;
    line-height: 2;


    ${props => props.primery && css<StyleBtnPropsType>`
        color: #fff;
        background: #4e71fe;
    `}

    ${props => props.outlined && css<StyleBtnPropsType>`
        color: #4e71fe;
        border: 2px solid #4e71fe;
        background: #fff;
    `}

`