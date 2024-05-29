import {
    createUser,
    giveToken,
    CheckOtp
} from "../services/auth.service.js";
import {
    registerValidation,
    loginValidation,
    otpValidation
} from "../validation/auth.validation.js";


export const registerController = async (req, res) => {
    try {
        const { okay, value, messages, statuss } = await registerValidation(req.body);

        if (!okay) return res.status(statuss).json(messages);


        const { ok, values, message, status } = await createUser(value);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ error: error.message });
    };
};

export const loginController = async (req, res) => {
    try {

        const { okay, value, messages, statuss } = await loginValidation(req.body);

        if (!okay) return res.status(statuss).json(messages);

        const { ok, values, message, status } = await giveToken(value);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ error: error.message });
    };
};

export const otpController = async (req, res) => {
    try {
        const { okay, value, messages, statuss } = await otpValidation(req.body);

        if (!okay) return res.status(statuss).json(messages); 

        const { ok, values, message, status } = await CheckOtp(value);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ error: error.message });
    };
};

