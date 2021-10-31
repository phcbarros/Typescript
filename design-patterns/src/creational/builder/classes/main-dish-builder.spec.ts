import {MainDishBuilder} from './main-dish-builder'
import {MealBox} from './meal-box'
import {Rice, Beans, Meat, Beverage, Dessert} from './meals'

const rice = new Rice('Arroz', 5)
const beans = new Beans('Feijão', 10)
const meat = new Meat('Carne', 20)
const beverage = new Beverage('Cerveja', 10)
const dessert = new Dessert('Torta de limão', 10)

describe('MainDishBuilder', () => {
  let mainDishBuilder: MainDishBuilder

  beforeEach(() => {
    mainDishBuilder = new MainDishBuilder()
  })

  test('SHOULD create a meal', () => {
    const meal = mainDishBuilder.makeMeal().getMeal()

    const expectedResult = new MealBox()
    expectedResult.add(rice, beans, meat)

    expect(meal).toEqual(expectedResult)
  })

  // should I create a separate test?
  test('SHOULD calculate a meal price', () => {
    const meal = mainDishBuilder.makeMeal().getMeal()

    const expectedResult = new MealBox()
    expectedResult.add(rice, beans, meat)

    expect(meal.getPrice()).toEqual(expectedResult.getPrice())
  })

  test('SHOULD create a beverage', () => {
    const meal = mainDishBuilder.makeBeverage().getMeal()

    const expectedResult = new MealBox()
    expectedResult.add(beverage)

    expect(meal).toEqual(expectedResult)
    expect(meal.getPrice()).toEqual(expectedResult.getPrice())
  })

  test('SHOULD create a dessert', () => {
    const meal = mainDishBuilder.makeDessert().getMeal()

    const expectedResult = new MealBox()
    expectedResult.add(dessert)

    expect(meal).toEqual(expectedResult)
    expect(meal.getPrice()).toEqual(expectedResult.getPrice())
  })

  test('SHOULD create a meal with dessert', () => {
    const meal = mainDishBuilder.makeMeal().makeDessert().getMeal()

    const expectedResult = new MealBox()
    expectedResult.add(rice, beans, meat, dessert)

    expect(meal).toEqual(expectedResult)
    expect(meal.getPrice()).toEqual(expectedResult.getPrice())
  })

  test('SHOULD create a meal with beverage', () => {
    const meal = mainDishBuilder.makeMeal().makeBeverage().getMeal()

    const expectedResult = new MealBox()
    expectedResult.add(rice, beans, meat, beverage)

    expect(meal).toEqual(expectedResult)
    expect(meal.getPrice()).toEqual(expectedResult.getPrice())
  })

  test('SHOULD create a beverage with dessert', () => {
    const meal = mainDishBuilder.makeBeverage().makeDessert().getMeal()

    const expectedResult = new MealBox()
    expectedResult.add(beverage, dessert)

    expect(meal).toEqual(expectedResult)
    expect(meal.getPrice()).toEqual(expectedResult.getPrice())
  })

  test('SHOULD create a full meal', () => {
    const meal = mainDishBuilder
      .makeMeal()
      .makeBeverage()
      .makeDessert()
      .getMeal()

    const expectedResult = new MealBox()
    expectedResult.add(rice, beans, meat, beverage, dessert)

    expect(meal).toEqual(expectedResult)
    expect(meal.getPrice()).toEqual(expectedResult.getPrice())
  })

  test('SHOULD reset meal', () => {
    const meal = mainDishBuilder.makeMeal()
    const result = meal.reset().getMeal()

    expect(result).toEqual(new MealBox())
  })
})
