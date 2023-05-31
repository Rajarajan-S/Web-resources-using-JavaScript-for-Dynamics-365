function HideField (executionContext) {

    var formContext = executionContext.getFormContext();

    var a = formContext.getAttribute("name").getValue();  // Get 'account name' field value

    if (a == "Samsung Inc.") {       
        formContext.getControl("parentaccountid").setVisible(false);  // Hide 'parent account' field, if 'account' name matches with the condition 
    }
}