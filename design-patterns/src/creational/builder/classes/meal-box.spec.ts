import {MealBox} from './meal-box'
import {Beans, Rice} from './meals'

describe('MealBox', () => {
  test('SHOULD create a meal box with 2 meals', () => {
    const rice = new Rice('Arroz', 5)
    const beans = new Beans('Feijão', 10)

    const mealBox = new MealBox()
    mealBox.add(rice, beans)

    expect(mealBox.getTotalItens()).toBe(2)
  })

  test('SHOULD sum the box meal price', () => {
    const rice = new Rice('Arroz', 5)
    const beans = new Beans('Feijão', 10)

    const mealBox = new MealBox()
    mealBox.add(rice, beans)

    expect(mealBox.getPrice()).toBe(15)
  })
})
