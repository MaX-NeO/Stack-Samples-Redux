import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome <span className=' username-color'>{user.username} </span> ! </h1>
                </div>

            </div>
        </>
    )
}

export default Dashboard