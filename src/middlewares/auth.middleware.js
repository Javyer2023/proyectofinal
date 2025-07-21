import jwt from "jsonwebtoken";

export const auth = (req, resp, next) => {
    const token = req.headers['authorization'].split(" ") [1];
    console.log(token);
    if (!token) return resp.sendStatus(401);

    jwt.verify(token, process.env.JWT_PASS, (err) => {
        if (err) return resp.sendStatus(403);
        next();
    });
};