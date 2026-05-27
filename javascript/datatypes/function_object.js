var employee1 = {
    name: "Ashok",
    company: "Virtusa",
    getDetails: function () {
        return `name : ${this.name}, company: ${this.company}`
    }
}

console.log(employee1.name); //Ashok
console.log(employee1.company); //Virtusa
console.log(employee1.getDetails()) // name : Ashok, company: Virtusa


function employee2() {
    console.log("function called");
};

employee2.company = "Accenture";
employee2.getDetails = function () {
    return `name : ${this.name}, company: ${this.company}`;
}


console.log(employee2.name); //employee2
console.log(employee2.length); //1
console.log(employee2.company); //Accenture
console.log(employee2.getDetails()); // name : employee2, company: Accenture


//employee1(); //object cannot be called
employee2(); // function can be called

var obj1 = new employee2(); //instance of function
console.log(employee2.name); // name is default - can be accessed
console.log(obj1.company); // cannot be accessed because it is not prototype property