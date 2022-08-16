const blocks = {}
const create_block = require("create").create(blocks)
create_block(Wall, {
    name: "Flakite Wall", 
    health: 80,
    requirements: []
})
