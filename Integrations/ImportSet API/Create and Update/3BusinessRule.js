/*
1. SO here we need to Pass Correlation ID.
2. Correlation ID is Matching with Stagging Table Incident id and Stagging Table Incident id with External system Incident SysID.

*/

(function executeRule(current, previous /*null when async*/ ) {

    var rest = new sn_ws.RESTMessageV2('CreateIncidentImport', 'Create');
    rest.setStringParameter('ucall', current.caller_id);
    rest.setStringParameter('uste', current.state);
    rest.setStringParameter('usd', current.short_description);
    rest.setStringParameter('udes', current.description);
    rest.setStringParameter('ucon', current.contact_type);
    rest.setStringParameter('uid', current.correlation_id);
    var res = rest.execute();
    var resBody = res.getBody();
    gs.addInfoMessage(resBody);
    var parseBody = JSON.parse(resBody);
    current.correlation_id = parseBody.result[0].sys_id;
    current.correlation_display = parseBody.result[0].display_value;
    current.update();


})(current, previous);