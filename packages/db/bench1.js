let db = undefined
let start = 0

function insertMultiple(i, n) {
    if(i == n) 
        return { 
             time: Date.now() - start,
             count: i
        } 
    return db.exec(["insert into bench1(i) values(?)",i])
    .then(x => { return insertMultiple(i+1, n) })
    .catch(x => ({"error": x, count: i}) )
}


function main(args) {
    db = require("@nimbella/sdk").esql()
    db.exec("drop table if exists bench1")
    .then(console.log).catch(console.log)
    db.exec("create table if not exists bench1(i int)")
    .then(console.log).catch(console.log)

    start = Date.now()

    let size = parseInt(args.size) || 10
    return insertMultiple(0, size)  
}