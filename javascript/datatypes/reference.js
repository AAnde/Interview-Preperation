/**
 * reference data
 *      actual data will be stored in heap memory
 *      reference to this data will be saved into stack
 *      variables will be stored with references - which actually points the actual data stored on the heap
 * if you assign reference data to a variable, changes to this variable will effects the original data
 * reference data types : arrays, function and all the types of objects
 * reference types are mutable - it can be changed after it has been created and stored in the memory
 */

var employee1 = {
    name : "Ashok",
    company : "Virtusa",
    getSalary(){
        return 1000;
    }
}
var employee2 = employee1;
employee2.name = "Bhaskar";
console.log(employee1.name); //Bhaskar
console.log(employee2.name); //Bhaskar

// function arguments
function updateData(payload){
    payload.name = "test";
    payload.company = "Infosys"
}

var employee3 = {
    name : "Ramesh",
    company : "Cognizant"
}

updateData(employee3);

console.log(JSON.stringify(employee3));

