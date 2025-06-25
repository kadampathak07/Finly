import User from '../libs/model/user.model.js';

const createUser = async (req, res) => {
    try {
        const user = await User.create({
            email: 'agenta1gamer@gmsil.com',
            password: 'agent75',
        });
        res.render('user', { message: 'User Created', user });
    } catch (err) {
        res.status(500).render('user', { message: 'Error creating user', user: null });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: 'agenta1gamer@gmsil.com' });
        res.render('user', { message: 'User Retrieved', user });
    } catch (err) {
        res.status(500).render('user', { message: 'Error retrieving user', user: null });
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findOneAndDelete({ email: 'agenta1gamer@gmsil.com' });
        res.render('user', { message: 'User Deleted', user: null });
    } catch (err) {
        res.status(500).render('user', { message: 'Error deleting user', user: null });
    }
};

export { createUser, getUser, deleteUser };