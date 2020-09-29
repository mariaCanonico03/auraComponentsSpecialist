({
	onFormSubmit: function (component, event, helper) {
	console.log("boatSearch component event handler");
		var data = event.getParam("formData");
		console.log("event get");
		var boatSearchResultsCmp = component.find("cmpBoatSearchResults");
		console.log("search result component found");
		if (boatSearchResultsCmp) {
			boatSearchResultsCmp.search(data.boatTypeId);
		}
	}
})
