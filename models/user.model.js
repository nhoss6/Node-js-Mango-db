const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} est un email incorrect !`
        },
        required: [true, "L'email est obligatoire !"]
    },
    password: {
        type: String,
        validate: {
            validator: function (v) {
                return v.length > 7;
            },
            message: () => `Le mot de passe ne fait pas 8 caractères !`
        },
        required: [true, 'Le mot de passe est obligatoire !']
    },
})

User = mongoose.model('User', userSchema);

const validationCreateUser = async (req, res, next) => {
    const user = new User(req.body)
    const errorFound = user.validateSync();

    next()
}

module.exports = validationCreateUser