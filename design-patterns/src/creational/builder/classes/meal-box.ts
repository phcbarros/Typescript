import {MealCompositeProtocol} from '../interfaces/meal-composite-protocol'

export class MealBox implements MealCompositeProtocol {
  private readonly _children: Array<MealCompositeProtocol> = []

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0)
  }

  add(...meals: Array<MealCompositeProtocol>): void {
    meals.forEach((meal) => this._children.push(meal))
  }

  getTotalItens(): number {
    return this._children.length
  }
}
