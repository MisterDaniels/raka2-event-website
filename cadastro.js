exports.post = function (req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Preencha todos os dados')
        }
    }
    return res.send(req.body)
}