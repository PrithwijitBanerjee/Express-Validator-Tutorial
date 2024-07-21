exports.registerUsr = (req, res) => {
    const { name, email, password, dob } = req.body;
    res.status(201).json({
        success: true,
        message: 'User was created successfully',
        user: {
            name,
            email,
            password,
            dob
        }
    });
};

exports.loginUsr = (req, res) => {
    const { email, password } = req.body;
    if (email === "prithwijit98@gmail.com" && password === "1Rick98@") {
        res.status(200).json({
            success: true,
            message: 'User successfully logged in'
        });
    } else {
        res.status(200).json({
            success: false,
            message: 'User Authentication Failed !!, Invalid Credentials !!'
        });
    }
};