import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import {
    Container,
    Content,
    Header,
    Title,
    Text,
    Form,
    Label,
    Input,
    Footer,
    Button,
    SpanError,
    LoginButton
} from './sytles'

import api from '../../services/api'

const SignUp:React.FC = () => {
    
    const [nickname, setNickname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('')

    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        
        try {
            const { status } = await api.post('/users', {
                nickname,
                email
            })

            if(status===201){
                setEmail('')
                setNickname('')
                navigate('/')
            }
    
        }catch (error: any){
            const { message } = error.response.data
            showError(message)
        }     
    }

    const handleLogin = () => {
        navigate('/')
    }

    const showError = (message: string) => {
        setError(message)
        setInterval(()=> {
            setError('')
        },5*1000)
    }

    return (
        <Container>
            <Content>
                <Header>
                    <Title>Sign Up</Title>
                    <Text> Let's start =)</Text>
                    { error &&
                        <SpanError>{error}</SpanError>
                    }
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Label 
                        htmlFor="nickname"
                    >
                        Nickname

                    </Label>
                    <Input 
                        type="text" 
                        placeholder='Type your nickname'
                        id='nickname'
                        value={nickname}
                        onChange={(event) => setNickname(event.target.value)}
                        />
                    
                    
                   <Label 
                        htmlFor="email"
                    >
                        E-mail
                    </Label>
                    <Input 
                        type="email" 
                        placeholder='Type your e-mail'
                        id='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Button
                        type='submit'
                        value='Start'
                    />
                </Form>
                <Footer>
                    <LoginButton onClick={handleLogin}>Login</LoginButton>
                </Footer>
            </Content>
        </Container>
    )
}

export default SignUp