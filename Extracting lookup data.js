/* Extracting the 'email address' field of an 'account' entity record 
 using the 'customer' lookup field in the invoice form 
 
1. Add the default 'Email address' field in the Account form and make sure it has some data.
2. Add the default 'Email address' field in the Invoice form. */


function OnSave(executionContext){
	var formcontext = executionContext.getFormContext();
	
	if(formcontext.getAttribute("customerid") !== null && formcontext.getAttribute("customerid").getValue() !== null){
		
		var AcntId = formcontext.getAttribute("customerid").getValue()[0].id;
		Xrm.WebApi.retrieveRecord("account", AcntId, "?$select=emailaddress1,accountid").then(
        function success(result) {
		
		
	    if (result["accountid"] === null)
		  formcontext.getControl("emailaddress").setVisible(false);	
	  
        if (result !== null) {		  
          if (result["accountid"] !== null)			
              formcontext.getAttribute("emailaddress").setValue(result["emailaddress1"]);	  
		  
		  else         	  
		      formcontext.getControl("emailaddress").setVisible(false);			         	  
        }     
      });
	}
}



