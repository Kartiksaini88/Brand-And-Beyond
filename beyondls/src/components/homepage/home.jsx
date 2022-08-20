import axios from 'axios'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import './home.css'

export const Home = () => {
    const [users, setusers] = useState([])
    //   console.log(users.user)
    const { authout } = useContext(AuthContext)
    const fetchUsers = () => {
        axios.get("http://52.25.225.53:5000/users")
            .then(res => setusers(res.data.user))
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div className="homepage">
            <h1>Admin Page 👨‍💼</h1>
            <div className='show-users'>
                {users.map((e, i) => <div key={nanoid()} className='everybox'><h2 className='name'>👤{e.name}</h2><h3 className='email'>✉️ {e.email}</h3></div>)}
            </div>
            <div className="button" onClick={authout}>Logout</div>
        </div>
    )
}