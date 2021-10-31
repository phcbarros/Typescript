import {MealBuilderProtocol} from '../interfaces/meal-builder-protocol'
import {MealBox} from './meal-box'
import {Beans, Beverage, Dessert, Meat, Rice} from './meals'

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox()

  reset(): this {
    this._meal = new MealBox()

    return this
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5)
    const beans = new Beans('Feijão', 10)
    const meat = new Meat('Carne', 20)
    this._meal.add(rice, beans, meat)

    return this
  }

  makeBeverage(): this {
    this._meal.add(new Beverage('Cerveja', 10))

    return this
  }

  makeDessert(): this {
    this._meal.add(new Dessert('Torta de limão', 10))

    return this
  }

  getMeal(): MealBox {
    /**
     *
     * here we could reset the object _meat to create a new MeatBox
     * const meal = this._meat
     * this._meal = new MealBox()
     *
     * return meal
     */

    return this._meal
  }

  getPrice(): number {
    return this._meal.getPrice()
  }
}
