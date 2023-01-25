const db = require("../config/database")

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await db("users").where({ id }).first()
        },
        async getUsers() {
            return await db("users")
        }
    },
    Mutation: {
        async createUser( _, { input }) {
            await db("users").insert({ 
                name: input.name,
                email: input.email, 
                password: input.password
            })

            return await db("users")
        }
    }
}