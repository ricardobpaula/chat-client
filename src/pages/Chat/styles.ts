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
    height: 80vh;
    padding: 2rem;
    margin: 2rem;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
    border-radius: 8px;
`

export const Title = styled('h2')`
    font-weight: 600;
`

export const MessageContainer = styled('div')`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 0.5rem;
`

export const Message = styled('p')<{sended: boolean}>`
    background-color: #fa7878;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.5rem;
    word-wrap: break-word;
    border-radius: 4px;
    text-align: left;
    width: 100%;
    ${props => props.sended &&
        `
            background-color: #55ff99;
            text-align: right;
        `
    }
`
export const Form = styled('form')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Input = styled('input')`
    outline: none;
    font-size: 0.9rem;
    width: 100%;
    color: rgba(0,0,0,0.7);
    margin-right: 0.5rem;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    &::placeholder {
        color: rgba(0, 0, 0, 0.5)
    }
    &:focus {
        border-bottom: 2px solid #a03cf1;
        transition: all .2s ease-in-out;
    }
`
export const SendButton = styled('button')`
    padding: 0.4rem 1rem;
    background: #a54eec;
    cursor: pointer;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 300;
    border-radius: 4px;
    &:hover {
        background: #811bd4;
        transition: all .2s ease-in-out;
    }
`

export const TypeText = styled('span')`
    color: rgba(0,0,0,0.8);
    font-size: 0.9rem;
    font-weight: 300;
`
