const { expect } = require('chai');
const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const { makeMemberArray } = require('./members.fixtures');

describe.only('Members Endpoints', () => {
    let db;

    before('Make the knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL
        });
        app.set('db', db);
    });

    after('disconnect from the database', () => db.destroy());

    before('clean the table', () => db.raw('TRUNCATE members RESTART IDENTITY CASCADE'));

    afterEach('cleanup members', () => db.raw('TRUNCATE members RESTART IDENTITY CASCADE'));

    describe('GET /members', () => {
        context('given there are no members in db', () => {
            it('returns a 200 and an empty array', () => {
                return supertest(app)
                    .get('/members')
                    .expect(200, []);
            })
        })

        context('given there are members in db', () => {
            const testMembers = makeMemberArray();

            beforeEach('add members', () => {
                return db
                    .into('members')
                    .insert(testMembers)
            });

            it('returns a 200 and all members', () => {
                return supertest(app)
                    .get('/members')
                    .expect(200, testMembers);
            });
        });
    });

    describe('GET /members/:name', () => {
        context('when there are no members in db', () => {
            it('returns a 404 and an error for the note', () => {
                const testName = "JulianneHuffer"
                return supertest(app)
                    .get(`/members/${testName}`)
                    .expect(404)
                    .expect({error: {message: 'Member not found.'}});
            });
        });
    });

    describe('POST /members', () => {
        const testMembers = makeMemberArray();

        beforeEach('Add members', () => {
            return db
                .into('members')
                .insert(testMembers);
        });

        it('returns a 201 when new member is added', () => {
            const newMember = {
                name: 'Test Name',
                number: '3200',
                last_modified: '2021-02-03T00:28:46.984Z'
            }
            return supertest(app)
                .post('/members')
                .send(newMember)
                .expect(201)
                .expect(res => {
                    expect(res.body.name).to.eql(newMember.name);
                    expect(res.body.number).to.eql(newMember.number);
                    expect(res.body).to.have.property('last_modified');
                    expect(res.body).to.have.property('id');
                    expect(res.headers.location).to.eql('/');
                });
        });       
    });

    describe('DELETE /members/:name', () => {
        context('When there are no members in db', () => {
            it('returns a 404 and associate error', () => {
                const testName = "JuliusCaesarManWow";
                return supertest(app)
                    .delete(`/members/${testName}`)
                    .expect(404)
                    .expect({
                        error: { message: 'Member does not exist' }
                    });
            });
        });

        context('When there are members in db', () => {

            beforeEach('add member to db', () => {
                const testMember = makeMemberArray();
                return db
                    .into('members')
                    .insert(testMember);
            });

            it('returns a 204 and the member is not in a get request', () => {
                const testMember = makeMemberArray();
                const nameToRemove = "Austin";
                const expectedArray = testMember.filter(member => member.name !== nameToRemove);

                return supertest(app)
                    .delete(`/members/${nameToRemove}`)
                    .expect(204)
                    .then(res =>
                        supertest(app)
                            .get('/members')
                            .expect(200, expectedArray)
                    );
            });
        });
    });
});