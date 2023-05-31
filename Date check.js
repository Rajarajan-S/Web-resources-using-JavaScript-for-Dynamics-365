function validateDate() {
	
    var startdate = Xrm.Page.getAttribute("startdate").getValue();
    var enddate = Xrm.Page.getAttribute("enddate").getValue();
	
    if (startdate > enddate) {
        alert("End date should be greater than the start date.");
    }
}