function requireLogin(req, res, next) {
    if (req.session && req.session.userld) {
        return next();
        } else {
            return res.redirect('/login');
        }
    }

module.exports = { requireLogin };