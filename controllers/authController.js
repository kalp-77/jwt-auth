const User = require('../models/User');

// handle errors function 
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { 
        email: '',
        password: ''
    };

    // duplicate email error code
    if(err.code == 11000) {
        errors.email = 'The email is already registered, try using different email'
        return errors;
    }

    // validation errors - cycling through error object
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(error => {
            errors[error.properties.path] = error.properties.message;
        });
    }

    return errors;
}


// route logic 
const get_signup = (req, res) => {
    
}
const post_signup = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    try{
        // asynchronous task and returns a promise
        const user = await User.create({ email, password })
        res.status(201).json(user);
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}

const get_login = (req, res) => {
    res.render('login');
}

const post_login = (req, res) => {
    
}




module.exports = {
    get_signup,
    post_login,
    get_login,
    post_signup
}