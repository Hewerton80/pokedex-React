import styled from 'styled-components';
import {colors} from   '../../styles/colors'

export const Header = styled.header`

    height: 56px;
    background: ${colors.prim1};
    display:flex;
    justify-content: center;
    padding: 0 60px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    .headerContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width:980px;
        /* margin:0 auto; */
        width: 100%;
        height: 100%;
        .logo{
            display:flex;
            
            align-items: center;
            height: 100%;
            img{
                width:120px;
            }
        }
        .infouser{
            display:flex;
            align-items: center;
            height: 100%;
            svg{
                margin-right:15px;
                transform: scale(1.2);
            }
            
  
            button{
                outline: none;
                border: none;
                background: transparent;
                font-size: 18px;
                color: #fff;
            }
            
        }
    }
    li.item{
        width: auto;
        overflow: hidden;
        font-size: 1rem;
        box-sizing: border-box;
        min-height: 48px;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.5;
        padding-top: 6px;
        white-space: nowrap;
        letter-spacing: 0.00938em;
        padding-bottom: 6px;
    }
`