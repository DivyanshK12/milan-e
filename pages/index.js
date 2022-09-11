import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'
import Barcode from "react-barcode";
import { useState, useRef } from "react";

const Profile = () => {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user) return <Link href="/api/auth/login"><a>Login</a></Link>;

    const barcodeRef = useRef(null);
    const [barcode, setBarcode] = useState("CODE128");
    const handleChange = (event) => {
      setBarcode(event.target.value ? event.target.value : "");
    };
    const id = user.email.split("@")[0].toUpperCase();
    return <div>Hello {user.name}.. {user.email}, <img src={user.picture} referrerpolicy="no-referrer"/>
      <Barcode
        value={id}
        height={90}
        width={1.5}
        fontOptions="600"
        textMargin={4}
        margin={5}
        ref={barcodeRef}
      />
      <Link href="/api/auth/logout"><a>Logout</a></Link>
    </div>;
  }

export default withPageAuthRequired(Profile)