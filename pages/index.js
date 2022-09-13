import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Menu } from '../components/Menu';
import { UserHeader } from '../components/UserHeader';

const Profile = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>; // can have spinner here
  if (error) return <div>{error.message}</div>;
  if (!user) return <Link href="/api/auth/login"><a>Login</a></Link>;

  const id = user.email.split("@")[0].toUpperCase();

  const [menu, setMenu] = useState([]);
  const [isLoadingMenu, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://iith.dev/v2/dining.json')
      .then(response => response.json())
      .then(data => {
        setMenu(data)
        setLoading(false)
      });
  }, [])

  if (isLoadingMenu) return <h1>Loading...</h1> // spinner ?
  if (!menu) return <h1>Something went wrong</h1>

  return <>
    <UserHeader name={user.name} src={user.picture}/>
    <Menu data={menu} value={id}/>
  </>;
}

export default withPageAuthRequired(Profile)