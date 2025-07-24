import jwt from "jsonwebtoken";

export const auth = (req, resp, next) => {
    const autHeader =  req.headers['authorization'];
    if (!autHeader) {
        return resp.status(401).json({ error: 'No se ha enviado el token' });
    }
    const token = autHeader.split(" ") [1];
    
    if (!token) {
        return resp.sendStatus(401);
    };

    jwt.verify(token, process.env.JWT_PASS, (err) => {
        if (err) return resp.sendStatus(403);
        next();
    });
};