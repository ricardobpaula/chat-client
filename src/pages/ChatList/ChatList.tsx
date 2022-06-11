import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import {
    Container,
    Content,
    Header,
    Title,
    UserList,
    UserCard,
    Text
} from './styles'

const ChatList:React.FC = () => {
    const [users, setUsers] = useState<User[]>()
    const navigate = useNavigate()

    const handleClickUser = (user: User) => {
        navigate('/chat', {state: {user}})
    }
    
    async function getUsers(){
        try{
            const localUser = localStorage.getItem('chat-client:user-id')
            if(localUser){
                const user = JSON.parse(localUser) as User
                const {data, status} = await api.get<User[]>('/users',{
                    headers: {
                        'user-id': user.id
                    }
                })
                if(status===200){
                    setUsers(data)
                }
            }

        }catch (error:any){
           alert(error.response.data.message) 
        }
        
    }

    useEffect(()=>{
        getUsers()

    },[])
    
    return (
        <Container>
            <Content>
                <Header>
                    <Title>Chats</Title>
                </Header>
                <UserList>
                    {
                        users?.map(user => (
                            <UserCard
                                key={user.id}
                                onClick={()=>{handleClickUser(user)}}
                            >
                                <Text>{user.nickname}</Text>
                            </UserCard>
                        ))
                    }
                </UserList>
            </Content>
        </Container>
    )
}

export default ChatList