function OnSave(executionContext) {
    var formContext = executionContext.getFormContext();
    var EmpId = formContext.getAttribute("Employeeid").getValue(); // Get value of the field 'Employee ID'

    if (containsOnlyNumbers(EmpId)) {
        formContext.getAttribute("Employeeid").setValue(EmpId);
    } else {
        alert("Employee ID should contain only numbers");
    }
}

// Function to check the Employee ID field contains only numbers
function containsOnlyNumbers(EmpId) {
    return /^\d+$/.test(EmpId);
}

