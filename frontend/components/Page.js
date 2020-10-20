import React, {Component} from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

const MyButton = styled.button`
    background:red;
    font-size: ${props => props.huge? '100px': '30px'};
`;

const BigPoop = styled.span
`
    font-size:200px;
`;

class Page extends Component {
    render() {
        return (
            <div>
                <Meta/>
             <Header />
             <MyButton >
                 Click Me
                <BigPoop>poop</BigPoop>
             </MyButton>

             <MyButton huge>
                 Click Me
                <BigPoop>poop</BigPoop>
             </MyButton>
                {this.props.children}
            </div>
        );
    }
}


export default Page;