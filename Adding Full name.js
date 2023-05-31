function OnSave(executionContext){
	
    var formContext = executionContext.getFormContext();
	
    var firstName = formContext.getAttribute("firstname").getValue(); // Get 'first name' field value
    var lastName = formContext.getAttribute("lastname").getValue(); // Get 'last name' field value
	
    // Check for null conditions
    if(firstName != null && lastName != null){
        formContext.getAttribute("fullname").setValue(firstName+" "+lastName);  // Set 'full name' field value
    }else{
        formContext.getAttribute("fullname").setValue("")
        formContext.getControl("fullname").setVisible(false);
    }
}



