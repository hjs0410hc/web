import React from 'react';

import Button from '../components/Button';
const Home = ()=>{
    return (
        <div>
            <p>This is the home page</p>
            <Button onClick={()=>{alert('whydidyouclickthis???')}}>Click me!!</Button>
        </div>
    );
}

export default Home;