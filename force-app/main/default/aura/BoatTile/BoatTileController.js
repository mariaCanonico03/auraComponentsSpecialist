({
  onBoatClick: function (component, event, helper) {
    //fire the event to change css class of the tile
    console.log("ho clicatto su onBoatClick");
    const boatId = component.get("v.boat.Id");
    const boat = component.get("v.boat");
    console.log("boat id " + boatId);
    console.log("data created");
    const boatselect = component.getEvent("boatselect");
    console.log("event get");
    boatselect.setParams({ "boatId": boatId });
    boatselect.fire();
    console.log("event fired");
    //fire the event that will be handled by th BoatDetails component to show
    // the details

    console.log("boat retrieved " + boat);
    const boatselected = $A.get("e.c:BoatSelected");
    console.log("event boat selected created");
    boatselected.setParams({
      "boat": boat
    });
    console.log("parameters added");
    boatselected.fire();
    console.log("event boat selected fired");

    //map event
    var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");

    plotMapMarkerEvent.setParams({
      "sObjectId": selectedBoat.Id,
      "lat": selectedBoat.Geolocation__Latitude__s,
      "long": selectedBoat.Geolocation__Longitude__s,
      "label": selectedBoat.Name
    });
    plotMapMarkerEvent.fire();
  }
})
