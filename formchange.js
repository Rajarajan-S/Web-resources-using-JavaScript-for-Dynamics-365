function formChange(executionContext){
	
	var formcontext = executionContext.getFormContext();
	var type = formcontext.getAttribute("casetypecode").getText(); 
	
	NavigateForm(type,formcontext);
}
function NavigateForm(type,formcontext){
	
	var curForm = formcontext.ui.formSelector.getCurrentItem();
	var avlForms = formcontext.ui.formSelector.items.get();
	
	
	// Checking the case type against the form name
	if(curForm.getLabel().toLowerCase() != type.toLowerCase()){   
		for(var i in avlForms){
			var form = avlForms[i];
			if(form.getLabel().toLowerCase() == type.toLowerCase()){
				form.navigate();
				return true;
			}
		}
	}
}
