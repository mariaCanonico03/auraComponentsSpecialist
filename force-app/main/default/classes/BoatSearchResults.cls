public with sharing class BoatSearchResults {
  @AuraEnabled(cacheable = true)
  public static List<BoatType__c> getBoatTypes() {
    return [SELECT Name, Id FROM BoatType__c ORDER BY Name];
  }

  @AuraEnabled
  public static List<Boat__c> getBoats(String boatTypeId){
    if(boatTypeId==null || boatTypeId==''){
      return [select id,Name,BoatType__c,Contact__c,Picture__c from Boat__c];  
    }else
      {
     return [select id,Name,BoatType__c,Contact__c,Picture__c from Boat__c where BoatType__c=:boatTypeId];       
    } 
  }
}
