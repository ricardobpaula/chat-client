import React, { 
    useEffect, 
    useState
} from 'react'
import { useLocation } from 'react-router-dom'
import SocketIO from '../../services/SocketIO'
import {
    Container,
    Content,
    Form,
    Input,
    Message,
    MessageContainer,
    SendButton,
    Title,
    TypeText
} from './styles'
import { useTitle } from '../../hooks/useTitle'

type MessageProps = {
    owner: number;
    text: string;
    id: number;
}

type StateProps = {
    user: User
}

const Chat:React.FC = () => {
    const [socket] = useState<SocketIO>(new SocketIO())

    const [me, setMe] = useState<User>()
    const [otherUser, setOtherUse] = useState<User>()

    const [message, setMessage] = useState<string>('')
    const [messages, setMessages] = useState<MessageProps[]>([])

    const [loading, setLoading] = useState<boolean>(true)

    const [meTyping, setMeTyping] = useState<boolean>(false)
    const [typing, setTyping] = useState<boolean>(false)

    const { state } = useLocation()
    
    useTitle(`Chat with ${otherUser?.nickname}`)

    const handleType = (text: string) => {
        setMessage(text)
        onChangeTyping(text)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!message){
            return
        }
        const newMessage = {
            owner: me?.id || 0,
            text: message,
            id: Math.floor(Math.random() * 1e6)
        } as MessageProps

        setMessages((oldValue)=>[...oldValue, newMessage])

        socket.sendMessage(message)
        handleType('')
    }

    const callbackReceiveMessage = (data: any) => {
        const {to, from , message } = data
        if(to===me?.id && from === otherUser?.id){
            const newMessage = {
                id: Math.floor(Math.random() * 1e6),
                owner: from,
                text: message                
            } as MessageProps
            setMessages((oldValue)=> [...oldValue, newMessage])
        }
    }

    const callbackTyping = (data: any) => {
        const { to, from, typing } = data
        if(to===me?.id && from === otherUser?.id){
            setTyping(typing)
        }
    }

    const onChangeTyping = (text: string) => {
        if((!meTyping && text) || (meTyping && !text) ){
            const isTyping = !!text
            setMeTyping(isTyping)
            socket.sendTyping(isTyping)
        }
    }

    useEffect(()=>{
        const userLocal = JSON.parse(localStorage.getItem('chat-client:user-id') || '') as User
        setMe(userLocal)

        const { user } = state as StateProps        
        setOtherUse(user)

        setLoading(false)

        const title = otherUser ? `Chat with ${otherUser.nickname}` : 'Chat'

    },[])

    useEffect(()=> {
        if(me && otherUser){
           socket.joinChat(me.id, otherUser.id)

           socket.receiveMessage(callbackReceiveMessage)
           socket.receiveTyping(callbackTyping)
        }
    }, [me, otherUser])

    if(loading){
        return <h1>loading</h1>
    }

    return (
        <Container>
            <Content>
                <Title> Chat with {otherUser?.nickname}</Title>
                {
                    typing && 
                    <TypeText>Typing...</TypeText>
                }
                <MessageContainer>
                    {
                        messages.map(message =>(
                            <Message
                                sended={message.owner===me?.id}
                                key={message.id}
                            >
                                {message.text}
                            </Message>
                        ))
                    }
                </MessageContainer>
                

                <Form onSubmit={handleSubmit}>
                    <Input 
                        type="text" 
                        placeholder='Type your message'
                        value={message}
                        onChange={event=>handleType(event.target.value)}
                    />
                    <SendButton type='submit'> Send </SendButton>
                </Form>
            </Content>
        </Container>

    )
}

export default Chat