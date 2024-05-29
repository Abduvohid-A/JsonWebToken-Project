import Joi from "joi";

export const taskValidation = async (data) => {
    try {

        const schema = Joi.object({
            name : Joi.string().min(4).required(),
            description : Joi.string().min(7).required()
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
            messages : error.message
        }; 
    };
};