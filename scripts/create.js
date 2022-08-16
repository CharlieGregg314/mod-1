function create(obj, base) {
    if (base === undefined) {
        return function(base, opts) {
            let id = opts.name.toLowerCase().replace(" ", "-")
            obj[id] = extend(base, id, opts)
        }
    } else {
        return function(opts) {
            let id = opts.name.toLowerCase().replace(" ", "-")
            obj[id] = extend(base, id, opts)
        }
    }
}
