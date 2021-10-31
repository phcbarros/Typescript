import {VeganDishBuilder} from './vegan-dish-builder'
import {MealBox} from './meal-box'
import {Beans, Rice} from './meals'

describe('VeganDishBuilder', () => {
  let veganDishBuilder: VeganDishBuilder

  beforeEach(() => {
    veganDishBuilder = new VeganDishBuilder()
  })

  test('SHOULD create a vegan meal', () => {
    const meal = veganDishBuilder.makeMeal().getMeal()
    const rice = new Rice('Arroz', 5)
    const beans = new Beans('Feijão', 10)
    const expectedResult = new MealBox()
    expectedResult.add(rice, beans)

    expect(meal).toEqual(expectedResult)
    expect(meal.getPrice()).toEqual(expectedResult.getPrice())
  })

  test('SHOULD reset meal', () => {
    const meal = veganDishBuilder.makeMeal()
    const result = meal.reset().getMeal()

    expect(result).toEqual(new MealBox())
  })
})
