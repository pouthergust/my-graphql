const knexFile = require("../knexfile")
const knex = require("knex")(knexFile)

module.exports = knex

for(let i = 0; i < 1164; i++) {
    (async function() {
        await knex("users").insert({ 
            name: "Gabriel Henrique",
            email: "gabriel@henrique.com", 
            password: "gabhen"
        })
    })()
}


