import { faker } from "@faker-js/faker"


export class rondmData {

  static getFirstName() {
     
    return faker.person.firstName()
  }

  static getLastName() { 
    return faker.person.lastName ( )
  }
    
  static getmail(){
    return faker.internet.email()
  }

  static getPassword (){
    return faker.internet.password()
  }
}