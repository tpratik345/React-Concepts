import React from 'react'
import type { ProfileProps } from './Profile'
import Login from './Login'

type PrivateProps  = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileProps>
}

function Private({isLoggedIn, Component} : PrivateProps) {
    if(isLoggedIn) {
        return (
            <Component name='Pratik'/>
        )
    } else {
        return <Login />
    }
}

export default Private