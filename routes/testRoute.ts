import {IRouter} from "express";

const {Router} = require('express')

const router: IRouter= Router()

router.get('', ((req, res) => {
    res.json({api: '/api', "/": '/'})
}))

module.exports = router