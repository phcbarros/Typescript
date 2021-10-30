import {MyDatabaseFunction} from './db/my-database-function'

const myDatabase = MyDatabaseFunction

myDatabase.add({name: 'Paulo', age: 33})
myDatabase.add({name: 'Elisa', age: 36})
myDatabase.add({name: 'Melissa', age: 1})
myDatabase.add({name: 'Fábio', age: 1})

export {myDatabase}
