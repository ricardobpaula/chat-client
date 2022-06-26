import styled from 'styled-components'

export const Container = styled('div')`
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
    justify-content: center;
    align-items: center;
`

export const Content = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFF;
    max-width: 600px;
    width: 100%;
    min-height: 50vh;
    padding: 2rem;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
    border-radius: 8px;
`

export const Header = styled('div')`
    display: flex;
    flex-direction: column;
`

export const Title = styled('h1')`
    font-weight: 600;
    margin-bottom: 1rem;
`

export const Text = styled('p')`
    font-size: 1.3rem;
    font-weight: 600;
    color: #a03cf1;
    margin-bottom: 1rem;
`

export const Form = styled('form')`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export const Label = styled('label')`
    font-size: 1rem;
    margin-top: 10px;
`

export const Input = styled('input')`
    outline: none;
    font-size: 0.9rem;
    margin-top: 10px;
    color: rgba(0,0,0,0.7);
    min-width: 300px;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    &::placeholder {
        color: rgba(0, 0, 0, 0.5)
    }
    &:focus {
        border-bottom: 2px solid #a03cf1;
        transition: all .2s ease-in-out;
    }
`

export const Footer = styled('div')`
    display: flex;
    flex: auto;
    flex-direction: column;
    align-items: center;
`

export const Button = styled('input')`
    padding: 0.5rem 1rem;
    background: #a54eec;
    cursor: pointer;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 300;
    border-radius: 4px;
    margin-top: 10px;
    &:hover  {
        background-color: #811bd4;
        transition: all .2s ease-in-out;
    }
`

export const SignUpButton = styled('a')`
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    text-decoration-line: underline;
`

export const SpanError = styled('span')`
    font-size: 0.9rem;
    background-color: red;
    color: #fff;
    padding: 0.5rem 0.5rem;
    margin-bottom: 10px;
    border-radius: 4px;
    width: 100%;
    text-align: center;
`