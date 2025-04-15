(function executeRule(current, previous /*null when async*/) {

    var rest = new sn_ws.RESTMessageV2('TestIns', 'Create'); //REST Message Name, Method Name
    rest.setStringParameter('caller', current.caller_id);
    rest.setStringParameter('sd', current.short_description);
    rest.setStringParameter('des', current.description);
    rest.setStringParameter('con', current.contact_type);
    rest.execute();

})(current, previous);



/*{
"caller_id":"${caller}",
"short_description":"${sd}",
"description":"${des}",
"contact_type":"${con}"
}*/