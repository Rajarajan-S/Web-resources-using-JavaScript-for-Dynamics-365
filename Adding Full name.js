function OnSave(executionContext){
	
    var formContext = executionContext.getFormContext();
	
    var firstName = formContext.getAttribute("firstname").getValue();
    var lastName = formContext.getAttribute("lastname").getValue();
	
    if(firstName != null && lastName != null){
        formContext.getAttribute("fullname").setValue(firstName+" "+lastName);
    }else{
        formContext.getAttribute("fullname").setValue("")
        formContext.getControl("fullname").setVisible(false);
    }
}



