import jwt from "jsonwebtoken";

export const login = (req, resp) => {
    const {email, password} = req.body;
    if (email == 'admin' && password == '12345'){
        const payload = {email};
        const expiration = {expiresIn: '1h'};
        const token = jwt.sign(payload, process.env.JWT_PASS, expiration);
        resp.json({token});
    }
    else {
        resp.status(401).send();
    }
};