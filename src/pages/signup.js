import React, {useEffect} from 'react';

const SignUp = props=>{
    useEffect(()=>{ // this will work ONCE.
        document.title = 'Sign Up - Notedly';
    },[])

    return (
        <div>
            <p>Sign Up</p>
        </div>
    )
}
export default SignUp;