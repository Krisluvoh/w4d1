//Created Hamster Class

class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }

//Created Person Class

class Person {
    constructor(name,age,height,weight,mood,hamsters,bankAccount){
      this.name = 'Timmy'
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet() {
      console.log(`Hi! I am ${this.name}`)
    }
    eat() {
      this.weight ++
      this.mood ++
    }
    exercise() {
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
}
  const Tom=new Person('Tom')
  for (let i=0; i<9; i++)
  mark.ageUp()

mark.buyHamster(Hamster)
console.log(Timmy)

  //Created Dinner Class

  class Dinner {
    constructor (appetizer, entree, dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
  }

    //Created Chef Class)

  class Chef {
        constructor (name, favoriteDish) {
            this.name = name
            this.favoriteDish = favoriteDish
}
        cookDinner (Dinner){
            this.Dinner = Dinner
            console.log('${this.name} is cooking ${this.dinner}')
        }
    }
        const Timmy = new Chef ('Tom',['chicken', 'mashed potatoes','rolls'])
        const Sue = new Chef ('Sue',['burger','fries','apple pie'])
        const Chef = new Chef ('Tom','Sue')
new Chef.cookDinner(Tom)
new Chef.cookDinner(Sue)

        
    
  