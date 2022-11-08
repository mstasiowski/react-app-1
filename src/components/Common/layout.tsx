import {FC} from 'react';
import styled from 'styled-components';
import {Menu} from './menu';


const Wrapper = styled.div`
width: 100%;
height: 100vh;
margin: 0 auto;
padding: 0 1rem;
`;
const Content = styled.div` 
width:1024px;
height:100%;
margin: 0 auto;
padding: 0 1rem;`

interface IProps {
    children: React.ReactNode;
}

export const Layout: FC<IProps> = props => {
    return (
        <Wrapper>
            <Menu />
            <div>
                <Content>
                    {props.children}
                </Content>
            </div>
        </Wrapper>
    )
}