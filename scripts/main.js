function create(obj, base) {
    if (base === undefined) {
        return function(base, {name, ...opts}) {
            id = name.toLowerCase().replace(" ", "-")
            obj[id] = extend(base, id, {
                name,
                ...opts
            })
        }
    } else {
        return function({name, ...opts}) {
            id = name.toLowerCase().replace(" ", "-")
            obj[id] = extend(base, id, {
                name,
                ...opts
            })
        }
    }
}
require("blocks");
require("items");
