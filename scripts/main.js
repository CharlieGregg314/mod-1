function create(obj) {
    return function({name, ...opts}) {
        id = name.toLowerCase().replace(" ", "-")
        obj[id] = extend(Item, id, {
            name,
            ...opts
        })
    }
}
require("blocks");
require("items");
