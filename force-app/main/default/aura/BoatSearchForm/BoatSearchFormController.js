({
  doInit: function (component, event, helper) {
    // Create the action
    let action = component.get("c.getBoatTypes");
    // Add callback behavior for when response is received
    action.setCallback(this, function (response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.boatTypes", response.getReturnValue());
      }
      else {
        console.log("Failed with state: " + state);
      }
    });
    // Send action off to be executed
    $A.enqueueAction(action);
  },
  onFormSubmit: function (component, event, helper) {
    console.log("ho clicatto su on form submit");
    var boatTypeId = component.get("v.selectedType");
    console.log("selectd type " + boatTypeId);
    var data = {
      "boatTypeId": boatTypeId
    };
    console.log("data created");
    const formSubmitEvent = component.getEvent("formsubmit");
    console.log("event get");
    formSubmitEvent.setParams({ "formData": data });
    console.log("parameters set");
    formSubmitEvent.fire();
    console.log("event fired");

  },
  onCreateNewBoat: function (component, event, helper) {
    console.log('inside controller');
    const createBoatEvent = $A.get("event.force:createRecord");
    const typeId = component.get("v.selectedType");
    createBoatEvent.setParams({
      "entityApiName": "Boat__c",
      "defaultFieldValues": {
        'BoatType__c': typeId
      }
    });
    createBoatEvent.fire();
  }

})
