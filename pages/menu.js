import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react';
import { Menu } from '../components/Menu';

const MenuPage = () => {
    const [menu, setMenu] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://iith.dev/v2/dining.json')
        .then(response => response.json())
        .then(data => {
            setMenu(data)
            setLoading(false)
        });
      }, [])

    if(isLoading) return <h1>Loading...</h1>
    if(!menu) return <h1>Something went wrong</h1>

    return (
        <>
            <Menu data={menu}/>
        </>
    );
}

export default withPageAuthRequired( MenuPage );