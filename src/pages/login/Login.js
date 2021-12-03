import React from 'react'
import { login } from '../../services/api'


export default function Login() {
    
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        const {username, password} = event.target.elements
        login(username.value, password.value)
    }
    
    return (
        <form onSubmit={onSubmit}>
            Username:<input name="username" />
            Password:<input name="password"/>
            <button>Log In</button>
        </form>
    )
}