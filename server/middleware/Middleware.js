module.exports = (req, res, next) => {
    if(!req.session.user) {
        req.session.user = {
            userId: 0,
            cart: [{ name: "Helllooooo" }]
        }
    }
    next();
}