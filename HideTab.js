function hidetab(executionContext){
	var fc = executionContext.getFormContext();
	
	if(fc.getAttribute("tickersymbol").getValue() == null){
		fc.ui.tabs.get("stock_info").setVisible(false);
	}else{
		fc.ui.tabs.get("stock_info").setVisible(true);
	}
}
