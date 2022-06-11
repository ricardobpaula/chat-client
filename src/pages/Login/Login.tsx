import React, { useState } from 'react'
import {  useNavigate  } from 'react-router-dom'
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
    SignUpButton
} from './sytles'

import api from '../../services/api'

const Login:React.FC = () => {
    
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('')

    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        try {
            const { data: user, status } = await api.post<User>('/login', {
                email
            })

            if(status===200){
                setEmail('')
                localStorage.setItem('chat-client:user-id', JSON.stringify(user))
                navigate('/chat-list')
            }
    
        }catch (error: any){
            const { message } = error.response.data
            showError(message)
        }     
    }

    const handleSignUp = () => {
        navigate('/signup')
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
                    <Title>Login</Title>
                    <Text>Welcome back =)</Text>
                    { error &&
                        <SpanError>{error}</SpanError>
                    }
                </Header>
                <Form onSubmit={handleSubmit}>
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
                    <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
                </Footer>
            </Content>
        </Container>
    )
}

export default Login