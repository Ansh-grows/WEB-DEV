import React from 'react'

function withAuth(Component) {
    return function(props){
        console.log(props)
        let loggedIn = true
        if(loggedIn){
            return <Component {...props}/>
        }
        return <p>Please login to continue</p>
    }
}

export default withAuth