export function isTokenExpired(token: string) : boolean {
    if (!token) {
        return true; // Token is missing or invalid
    }

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        return payload.exp < currentTime; // Check if the token is expired
    } catch (e) {
        console.error("Error decoding token:", e);
        return true; // In case of error, consider token expired
    }
}