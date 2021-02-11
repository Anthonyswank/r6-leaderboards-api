const express = require('express')
const path = require('path')
const xss = require('xss')
const MemberService = require('./member-service')

const memberRouter = express.Router()
const jsonParser = express.json()

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
    .post(jsonParser, (req, res, next) => {
        const { name, number, last_modified } = req.body
        const knexInstance = req.app.get('db')
        if(!(name && number)) {
            return res.status(400).json({
                error:{message: 'Incomplete member submission.'}
            })
        }
        const newMember = {
            name: name,
            number: number,
            last_modified: last_modified
        }
        MemberService.insertMember(
            knexInstance,
            newMember
        )
        .then((member) => {
            res
                .status(201)
                .location(path.posix.join(req.originalUrl, '/'))
                .json(serializeMember(member))
        })
        .catch(next)
    })
 
memberRouter

    .route('/:name')

    .all((req, res, next) => {
        const knexInstance = req.app.get('db')
        MemberService.getMemberByName(
            knexInstance,
            req.params.name
        )
            .then((member) => {
                if(!member) {
                    return res.status(404).json({
                        error: {message: 'Member not found.'}
                    })
                }
                res.member = member
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json(serializeMember(res.member))
    })
    .patch(jsonParser, (req, res, next) => {
        //
        //
        // Need to work on making this work WIP for now.
        //
        //
        //
        const knexInstance = req.app.get('db')
        const {name, number} = req.body
        const memberToUpdate = {name, number}
        const numberOfUpdatedFields = Object.values(memberToUpdate).filter(Boolean).length
        if(numberOfUpdatedFields === 0) {
            return res.status(400).json({
                error: {message: 'Must have at least one field to update.'}
            })
        }
        const last_modified = new Date()
        const newMemberFields = {
            ...memberToUpdate,
            last_modified
        }
        MemberService.updateMember(
            knexInstance,
            res.member.id,
            newMemberFields
        )
            .then((updatedMember) => {
                res
                    .status(200)
                    .json(updatedMember[0])
            })
            .catch(next)
    })
    .delete((req, res, next) => {
        const knexInstance = req.app.get('db')
        MemberService.deleteMember(
            knexInstance,
            req.params.name
        )
            .then((numRowsAffected) => {
                res
                    .status(204)
                    .end()
            })
            .catch(next)
    })



module.exports = memberRouter