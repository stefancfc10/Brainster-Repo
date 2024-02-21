class Employee {
    constructor(nameArg,salaryArg,companyArg,jobPositionArg ){

        this.name = nameArg;
        this.salary = salaryArg + "$";
        this.company = companyArg;
        this.jobPosition = jobPositionArg;

    }
}

const person = new Employee("Ace",1500,"Bistro","Advocate" );

const person1 = new Employee("Mirko",3500,"Airbnb","QA Tester" );

const person2 = new Employee("Petar",2000,"Brainster","Graphic Designer" );
 
const personArray = [person,person1,person2];

console.log(personArray);

const listItem = document.querySelector("#list");

personArray.forEach(person => {
    const listPerson = document.createElement("li");
    listPerson.innerHTML = ` <b>Name:</b> ${person.name} , <b>Salary:</b> ${person.salary} , <b>Company:</b> ${person.company},  <b>Job Position:</b>  ${person.jobPosition}`

    listItem.appendChild(listPerson);
});