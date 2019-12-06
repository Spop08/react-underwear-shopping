import styled from 'styled-components';

export const LogInCard = styled.div `
box-shadow: 0 1px 25px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(13, 13, 13, 0.29);    
background: #fff;
max-width: 500px;
width: 95%;
display:block
margin: 0 auto;
position: relative
`;

export const Form = styled.form `
max-width: 500px;
margin: 0 2rem;
background-color: #fff;
padding-bottom: 4rem !important;
@media (max-width: 576px) {
    margin: 0 0.25rem;
}
`;

export const Button = styled.button `
background:#123597;
border:0;
display:flex;
margin: auto;
margin-top: 2rem;
&:hover {
    // background: #CE9FFC;
}
`

export const H3 = styled.h3 `
font-family: 'Source Sans Pro', sans-serif;
color: #123597;
text-align: center;
text-transform: uppercase;
margin-bottom:2rem;
margin-top:.25rem;
letter-spacing: 5px;
font-weight: 600;
`

export const H4 = styled.h4 `
text-align: center;
text-transform: uppercase;
letter-spacing: 2px;
font-weight: 600;
margin: 2rem;
`


export const Input = styled.input `
border: 0;
box-shadow: 1px 2px 10px 0 #e0e0e0;
width: 80%;
margin-bottom: 1.5rem;
margin: auto;
`