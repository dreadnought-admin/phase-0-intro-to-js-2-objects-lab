const employee = {
    name: "Andrea",
    streetAddress: "42 Wallaby Way",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    const employee = {...object}
    employee[key] = value
    return employee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    const employee = (object)
    employee[key] = value
    return employee
};

function deleteFromEmployeeByKey(object, key) {
    const employee = {...object}
    delete employee[key]
    return employee
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    const employee = (object)
    delete employee[key]
    return employee
}