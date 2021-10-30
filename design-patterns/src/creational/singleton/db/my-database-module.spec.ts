import {MyDatabaseModule} from './my-database-module'

describe('my-database-module', () => {
  test('SHOULD have only one instance', () => {
    const db1 = MyDatabaseModule
    const db2 = MyDatabaseModule

    expect(db1).toBe(db2)
  })

  test('SHOULD add an user', () => {
    const db1 = MyDatabaseModule
    db1.add({name: 'Foo', age: 1})

    expect(db1.get().length).toBe(1)
  })

  test('SHOULD have an user added previously', () => {
    const db1 = MyDatabaseModule

    expect(db1.get().length).toBe(1)
  })

  test('SHOULD remove an user', () => {
    const db1 = MyDatabaseModule

    db1.remove(0)

    expect(db1.get().length).toBe(0)
  })

  test('SHOULD not have an user', () => {
    const db1 = MyDatabaseModule

    expect(db1.get().length).toBe(0)
  })
})
