import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

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
        const decoded = verify(token, SECRET_KEY);
        return decoded;
    } catch (error) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }
};
