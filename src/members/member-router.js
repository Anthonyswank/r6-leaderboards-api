const express = require('express')
const path = require('path')
const xss = require('xss')
const MemberService = require('./member-service')

const memberRouter = express.Router()
// const jsonParser = express.json()

const serializeMember = member => ({
    id: member.id,
    name: xss(member.name),
    number: xss(member.number),
    last_modified: member.last_modified
});

memberRouter

 .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        MemberService.getAllMembers(knexInstance)
            .then(members => {
                res
                    .status(200)
                    .json(members.map(serializeMember))
            })
            .catch(next)
    })



module.exports = memberRouter