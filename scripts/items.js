items = {}
create_item = require("create.js").create(items, Item)
create_item({
    name: "Flakite", 
    color: Color.valueOf("949378"),
    flammability: 0.2,
    charge: 0.4,
    cost: 0.5
})
create_item({
    name: "Pyroblate",
    color: Color.valueOf("c48834"),
    flammability: 0.8,
    explosiveness: 0.2,
    cost: 0.8,
    healthScaling: 0.2
})
create_item({
    name: "Diricyte",
    color: Color.valueOf("12c098"),
    charge: 0.9,
    cost: 1.3,
    healthScaling: 0.8
})
