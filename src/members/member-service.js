const MemberService = {
    getAllMembers(knex) {
        return knex
            .select('*')
            .from('members')
    },
    insertMember(knex, newMember) {
        return knex
            .insert({...newMember})
            .into('members')
            .returning('*')
            .then((rows) => {
                return rows[0]
            })
    },
    getMemberById(knex, id) {
        return knex
            .select('*')
            .from('members')
            .where('id', id)
            .first()
    },
    getMemberByName(knex, name) {
        return knex
            .select('*')
            .from('members')
            .where('name', name)
            .first()
    },
    deleteMember(knex, name) {
        return knex('members')
            .where({name})
            .delete()
    },
    updateMember(knex, id, newMemberFields) {
        return knex('members')
            .where({id})
            .update({...newMemberFields}, '*')
    },
};

module.exports = MemberService