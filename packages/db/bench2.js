let db = undefined
let start = 0

function insertMultiple(i, n) {
    if(i == n) 
        return { 
             time: Date.now() - start,
             count: i
        } 
    return db.exec(["insert into bench2(i,s,t) values(?,?,?)",i, i.toString(16), Date.now()])
    .then(x => { return insertMultiple(i+1, n) })
    .catch(x => ({"error": x, count: i}) )
}

function main(args) {
    db = require("@nimbella/sdk").esql()
    db.exec("drop table if exists bench2")
    .then(console.log).catch(console.log)
    db.exec("create table if not exists bench2(i int, s varchar, t timestamp)")
    .then(console.log).catch(console.log)

    start = Date.now()
    let size = parseInt(args.size) || 10
    return insertMultiple(0, size)  
}