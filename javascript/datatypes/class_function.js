class CEmployee {
    name;
    company;
    salary;
    location = "Chennai";
    constructor(name,company,salary){
        this.name = name;
        this.company = company;
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
}

var emp = new CEmployee("Ashok","Virtusa",100000);
console.log(emp.name);
console.log(emp.company);
console.log(emp.getSalary());
console.log(emp.location);
console.log(emp instanceof CEmployee);

function FEmployee(name,company,salary){
    this.name = name;
    this.company = company;
    this.salary = salary;
}
FEmployee.prototype.location = "Hyderabad";
FEmployee.prototype.getSalary = function(){
    return this.salary;
}

var emp1 = new FEmployee("Bhaskar","Accenture",200000);
console.log(emp1.name);
console.log(emp1.company);
console.log(emp1.getSalary());
console.log(emp1.location);
console.log(emp1 instanceof FEmployee);