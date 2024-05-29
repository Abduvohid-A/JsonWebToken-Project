import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const checkToken = async (req, res, next) => {
    try {
        const [type, token] = req.headers.authorization.split(' ');

        console.log({ type, token })

        if (type !== 'Bearer')
          return res.status(401).send('JWT Invalid');
    
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        console.log(decoded);

        next()
    } catch (error) {
        console.log(error);
        return res.status(401).send('JWT Invalid');
    };
};