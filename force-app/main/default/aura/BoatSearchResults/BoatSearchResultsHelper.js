({
  onSearch: function (component, boatTypeId) {
    var action = component.get("c.getBoats");
    console.log("sono nell'helper boatTypeID " + boatTypeId);
    action.setParams({ "boatTypeId": boatTypeId });
    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === 'SUCCESS') {
        var temp = response.getReturnValue();
        component.set("v.boats", temp);
        console.log("new boats set");
      }
      else {
        console.log("Failed with state: " + state);
      }
    });
    $A.enqueueAction(action);
  }
})
