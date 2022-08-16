const items = require("items")
const blocks = {}
const create_block = require("create")(blocks)
create_block(Wall, {
    name: "Flakite Wall", 
    health: 8000,
    requirements: [new ItemStack(items.flakite, 6)],
    category: Category.wall
})
module.exports = blocks
