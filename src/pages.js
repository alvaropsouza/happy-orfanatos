module.exports = {
    // index: function () {}
    index(req, res) {
        const city = req.query.city
        return res.render('index', { city })
    }
}