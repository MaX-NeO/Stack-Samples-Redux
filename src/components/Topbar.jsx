import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'



function Topbar() {
const user=useSelector(selectUser)

    return (
        <>
            <div className='topbar'>
                <h1 className='user username-color'>{user ? user.username : 'Guest'}</h1>
            </div>
        </>
    )
}

export default Topbar