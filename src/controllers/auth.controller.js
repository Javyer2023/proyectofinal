import jwt from "jsonwebtoken";

const default_user = {
    id: 1,
    email: "admin@gmail.com",
    password: "12345"
}

export const login = (req, resp) => {
    const {email, password} = req.body;
    const user = {id:1};
    if (email == default_user.email && password == default_user.password){
        const payload = {user};
        const expiration = {expiresIn: '1h'};
        const token = jwt.sign(payload, process.env.JWT_PASS, expiration);
        resp.json({token});
    }
    else {
        resp.status(401).send();
    }
};