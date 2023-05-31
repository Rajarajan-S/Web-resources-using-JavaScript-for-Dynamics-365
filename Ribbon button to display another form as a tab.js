function OnClick(){
	
   	// Ribbon button to display 'contact entity main form' as a pop-up tab
	Xrm.Navigation.navigateTo({pageType:"entityrecord", entityName:"contact", formType:2}, {target: 2, position: 1, width: {value: 50, unit:"%"}});
    
}

