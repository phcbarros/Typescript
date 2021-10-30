import {MyDatabaseClassic} from './my-database-classic'

describe('my-database-classic', () => {
  test('SHOULD have only one instance', () => {
    const db1 = MyDatabaseClassic.instance
    const db2 = MyDatabaseClassic.instance

    expect(db1).toBe(db2)
  })

  test('SHOULD add an user', () => {
    const db1 = MyDatabaseClassic.instance
    db1.add({name: 'Foo', age: 1})

    expect(db1.get().length).toBe(1)
  })

  test('SHOULD have an user added previously', () => {
    const db1 = MyDatabaseClassic.instance

    expect(db1.get().length).toBe(1)
  })

  test('SHOULD remove an user', () => {
    const db1 = MyDatabaseClassic.instance

    db1.remove(0)

    expect(db1.get().length).toBe(0)
  })

  test('SHOULD not have an user', () => {
    const db1 = MyDatabaseClassic.instance

    expect(db1.get().length).toBe(0)
  })
})
