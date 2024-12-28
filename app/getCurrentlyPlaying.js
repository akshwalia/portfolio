
import querystring from "querystring";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

let cachedToken = null;
let tokenExpiry = null;

const getAuth = (client_id, client_secret) => {
    return Buffer.from(`${client_id}:${client_secret}`).toString('base64');
};

const getAccessToken = async (client_id, client_secret, refresh_token) => {
    if (cachedToken && tokenExpiry && new Date() < tokenExpiry) {
        return cachedToken;
    }

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${getAuth(client_id, client_secret)}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        })
    });

    const data = await response.json();

    if (data.access_token) {
        cachedToken = data.access_token;
        tokenExpiry = new Date();
        tokenExpiry.setSeconds(tokenExpiry.getSeconds() + data.expires_in);
        return cachedToken;
    } else {
        console.error(JSON.stringify(data));
        throw new Error(`Failed to refresh token: ${JSON.stringify(data)}`);
    }
};

export const getNowPlaying = async (client_id, client_secret, refresh_token) => {
    const access_token = await getAccessToken(
        client_id,
        client_secret,
        refresh_token
    );
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export default async function getNowPlayingItem(
    client_id,
    client_secret,
    refresh_token
) {
    const response = await getNowPlaying(client_id, client_secret, refresh_token);
    if (response.status === 204 || response.status > 400) {
        return false;
    }
    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;

    return {
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    };
}