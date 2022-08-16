const blocks = {}
const create_block = require("create.js").create(blocks)
create_block(Wall, {
    name: "Flakite Wall", 
    health: 80,
    requirements: []
})
