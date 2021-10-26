const {Router} = require('express')

const router= Router()

router.get('', ((req, res) => {
    res.json({api: '/api', "/": '/'})
}))

module.exports = router