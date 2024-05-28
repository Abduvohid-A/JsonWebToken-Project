import Joi from "joi";


export const registerValidation = async (data) => {
    try {

        const schema = Joi.object({
            name : Joi.string().min(4).required(),
            email : Joi.string().email().required(),
            password : Joi.string().min(5).required()
        });

        const { error, value } = schema.validate(data);

        if (error) {
            return { 
                okay : false,
                statuss : 400, 
                value : "",
                messages : error.details[0].message
            };
        };

        return { 
            okay : true,
            statuss : 200, 
            value : value,
            messages : ""
        };
        
    } catch (error) {
        console.log(error);

        return { 
            okay : false,
            statuss : 400, 
            value : "",
            messages : error.details[0].message
        }; 
    };
};

export const loginValidation = async (data) => {
    try {

        const schema = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().min(5).required()
        });

        const { error, value } = schema.validate(data);

        if (error) {
            return { 
                okay : false,
                statuss : 400, 
                value : "",
                messages : error.details[0].message
            };
        };

        return { 
            okay : true,
            statuss : 200, 
            value : value,
            messages : ""
        };

    } catch (error) {
        console.log(error);

        return { 
            okay : false,
            statuss : 400, 
            value : "",
            messages : error.details[0].message
        }; 
    };
};