import {MyDatabaseFunction} from './my-database-function'

describe('my-database-function', () => {
  test('SHOULD have only one instance', () => {
    const db1 = MyDatabaseFunction
    const db2 = MyDatabaseFunction

    expect(db1).toBe(db2)
  })

  test('SHOULD add an user', () => {
    const db1 = MyDatabaseFunction
    db1.add({name: 'Foo', age: 1})

    expect(db1.get().length).toBe(1)
  })

  test('SHOULD have an user added previously', () => {
    const db1 = MyDatabaseFunction

    expect(db1.get().length).toBe(1)
  })

  test('SHOULD remove an user', () => {
    const db1 = MyDatabaseFunction

    db1.remove(0)

    expect(db1.get().length).toBe(0)
  })

  test('SHOULD not have an user', () => {
    const db1 = MyDatabaseFunction

    expect(db1.get().length).toBe(0)
  })
})
