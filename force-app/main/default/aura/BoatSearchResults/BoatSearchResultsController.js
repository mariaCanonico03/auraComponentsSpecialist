({
  doInit: function (component, event, helper) {
    helper.onSearch(component, '');
  },

  doSearch: function (component, event, helper) {
    console.log("sono in doSearch of BoatSearchResult");
    var params = event.getParam('arguments');
    console.log("PARAMETRO OTTENUTO");
    component.set("v.boatTypeId", params.boatTypeId);
    helper.onSearch(component, params.boatTypeId);
  },

  onBoatSelect: function (component, event, helper) {
    console.log("sono in onSelectedBoatId of BoatSearchResult");
    var boatId = event.getParam('boatId');
    console.log("PARAMETRO OTTENUTO " + boatId);
    console.log("PARAMETRO OTTENUTO valore prima " + boatId);
    component.set("v.selectedBoatId", boatId);
    console.log("PARAMETRO OTTENUTO valore dopo" + boatId);
  }
})