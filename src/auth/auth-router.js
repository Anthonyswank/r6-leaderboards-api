const express = require('express')

const authRouter = express.Router()
const jsonBodyParser = express.json()

authRouter
    .post('/login', jsonBodyParser, (req, res, next) => {
        const { user_name, password } = req.body
        const loginUser = { user_name, password }

        for (const [key, value] of Object.entries(loginUser))
            if (value == null)
                return res.status(400).json({
                    error: `Missing '${key}' in request body`
                })
        AuthService.getUserWithUserName(
            req.app.get('db'),
            loginUser.user_name
        )
            .then(dbUser => {
                if (!dbUser)
                return res.status(400).json({
                    error: 'Incorrect user_name or password',
                })
                res.send('ok')
            })
            .catch(next)
    })

module.exports = authRouter