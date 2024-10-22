import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'strong-access-secret';

interface DecodedToken {
    userId: string;
}

export const authenticate = (request: Request) => {
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader) {
        return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return NextResponse.json({ error: 'Token missing' }, { status: 401 });
    }

    try {
        const decoded = verify(token, JWT_SECRET) as DecodedToken;
        return decoded;
    } catch (error) {
        console.error('Error verifying token:', error);
        return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }
};
