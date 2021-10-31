import {MainDishBuilder} from './classes/main-dish-builder'
import {VeganDishBuilder} from './classes/vegan-dish-builder'

const mainDishBuilder = new MainDishBuilder()

const meal1 = mainDishBuilder.makeMeal().makeBeverage().makeDessert()
console.log(meal1.getMeal())
console.log('price', meal1.getPrice())

const meal2 = mainDishBuilder.reset().makeMeal().makeDessert()
console.log(meal2.getMeal())
console.log('price', meal2.getPrice())

const veganDishBuilder = new VeganDishBuilder()

const veganMeal = veganDishBuilder.makeMeal()
console.log(veganMeal.getMeal())
console.log('price', veganMeal.getPrice())
