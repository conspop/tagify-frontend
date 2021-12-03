import React from 'react'
import { authorizeSpotify } from '../../services/api'

export default function SpotifyAuth() {
    const [url, setUrl] = React.useState("")
    
    React.useEffect(() => {
        (async function() {
          const url = await authorizeSpotify();
          setUrl(url);
        })();
    }, []);

    return <a href={url}>Login</a>
}
