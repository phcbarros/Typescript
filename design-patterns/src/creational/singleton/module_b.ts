import {MyDatabaseFunction} from './db/my-database-function'
import {myDatabase as myDatabaseFromModuleA} from './module_a'

const myDatabase = MyDatabaseFunction

myDatabase.add({name: 'Ana', age: 55})
myDatabase.add({name: 'Ian', age: 28})
myDatabase.show()

console.log(myDatabase === myDatabaseFromModuleA)
