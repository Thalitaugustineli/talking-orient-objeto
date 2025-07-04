//Orientação à Objetos - JS

//Encapsulamento
// Encapsulamento é o conceito de esconder os detalhes internos de uma classe, expondo apenas o que é necessário para o usuário da classe.


// Abstração
// Abstração é o conceito de simplificar a complexidade de um sistema, mostrando apenas os aspectos essenciais e ocultando os detalhes desnecessários.

// Herança
// Herança é o conceito de criar uma nova classe baseada em uma classe existente, herdando

// Polimorfismo
// Polimorfismo é o conceito de permitir que diferentes classes implementem métodos com o mesmo

// A função require irá importar o módulo 'faker' que é usado para gerar dados aleatórios

const faker = require('faker')

/**
 * Encapsulamento e abstração
 */
class Human {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }

  greet() {
    return Math.random() > 0.5 ? `Hi` : 'Hello'
  }
}

const randomHuman = new Human(faker.name.firstName(), faker.datatype.number(99))

console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}.`)

/**
 * Herança
 */
class Wizard extends Human {
  constructor(name, age, powers = []) {
    super(name, age)
    this.powers = [...powers]
  }

  showRandomPower() {
    if (this.powers.length <= 0) {
      return "I haven't developed any power yet, but I'm learning at Hogwartz!"
    } else {
      const randomIndex = Math.floor(Math.random() * this.powers.length)
      return this.powers[randomIndex]
    }
  }
}

const randomWizard = new Wizard(
  faker.name.firstName(),
  faker.datatype.number(150),
  [
    'Lumus Maxima',
    'Expecto Patronum',
    'Abracadabra'
  ]
)

console.log(`${randomWizard.greet()}, I'm ${randomWizard.name}. I'm a wizard.`)
console.log(`Here's one of my powers: ${randomWizard.showRandomPower()}`)

const anotherRandomWizard = new Wizard(
  faker.name.firstName(),
  faker.datatype.number(150)
)

console.log(`${anotherRandomWizard.greet()}, I'm ${anotherRandomWizard.name}. I'm a wizard too.`)
console.log(anotherRandomWizard.showRandomPower())


/**
 * Polimorfismo
 */
class Gaucho extends Human {
  constructor(name, age) {
    super(name, age)
  }

  greet() {
    return 'E aí tchê'
  }
}

const randomGaucho = new Gaucho(faker.name.firstName(), faker.datatype.number(99))

console.log(`${randomGaucho.greet()}, me chamo ${randomGaucho.name}.`)

class Mineiro extends Human {
  constructor(name, age) {
    super(name, age)
  }

  greet() {
    return 'Bão'
  }
}

const randomMineiro = new Mineiro(faker.name.firstName(), faker.datatype.number(99))

console.log(`${randomMineiro.greet()}, michamo ${randomMineiro.name}.`)
