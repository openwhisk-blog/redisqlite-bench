function help(err) {
    let msg = "help: exec=<sql> | map=<sql> | arr=<sql>"
    if(err) {
        msg = err + "\n" + msg
    }
    return Promise.resolve(msg)
}

function main(args) {
    let start = Date.now()
    let db = require("@nimbella/sdk").esql()
    let res
    if(args.exec) 
        res = db.exec(args.exec)
    else if(args.map) 
        res = db.map(args.map)
    else if(args.arr)
        res = db.arr(args.arr)
    else res = help()
    return res
    .then(x=>({
        result:x,
        time: Date.now() - start
    }))
    .catch(e=>({error:e}))
}

exports.main = main
