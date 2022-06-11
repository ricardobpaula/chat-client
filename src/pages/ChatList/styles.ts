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
    min-height: 40vh;
    max-height: 60vh;
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
    margin-bottom: 0.9rem;
`

export const UserList = styled('div')`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export const UserCard = styled('div')`
    background-color: #55ff99;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
    text-align: left;
    width: 200px;
    cursor: pointer;
    &:hover {
        background-color: #00ff00;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
        transition: all .2s ease-in-out;
    }
`

export const Text = styled('span')`
`

