function create(obj, base) {
    if (base === undefined) {
        return function(base, {name, ...opts}) {
            let id = name.toLowerCase().replace(" ", "-")
            obj[id] = extend(base, id, {
                name,
                ...opts
            })
        }
    } else {
        return function({name, ...opts}) {
            let id = name.toLowerCase().replace(" ", "-")
            obj[id] = extend(base, id, {
                name,
                ...opts
            })
        }
    }
}
