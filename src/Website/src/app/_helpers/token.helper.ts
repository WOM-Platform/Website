import {jwtDecode} from 'jwt-decode';

export function isTokenValid(token: string): boolean {
    // No token provided
    if (!token) return false;

    try {
        const tokenPayload = decodeToken(token);
        const expiryDate = tokenPayload.exp;

        // Check if the current time is before the token's expiry date
        return Date.now() < expiryDate * 1000; // Convert expiry to milliseconds
    } catch (error) {
        // if token is malformed or invalid
        return false;
    }
}

export function decodeToken(token: string): any {
    return jwtDecode(token); // You can use 'jwt-decode' or implement your own decoding logic
}
