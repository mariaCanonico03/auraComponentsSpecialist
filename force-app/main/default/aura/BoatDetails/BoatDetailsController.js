({
  onBoatSelected: function (component, event, helper) {
    console.log("entered boatdetails");
    var boat = event.getParam('boat');
    console.log("entered boatdetails boat " + boat);
    component.set("v.id", boat.Id);
    console.log("entered boatdetails boat " + boat);
    component.set("v.boat", boat);
    console.log("data received in boatdetails" + boat);
    component.find("service").reloadRecord();
  },

  onRecordUpdated: function (component, event, helper) {
    component.find("service").reloadRecord();
  },

  onBoatReviewAdded: function (component, event, helper) {
    component.set('v.selectedTabId', 'boatreviewtab');
    var boatreviewcomponent = component.find("boatreviewcomponent");
    if (boatreviewcomponent) {
      boatreviewcomponent.refresh();
    }
  },
})