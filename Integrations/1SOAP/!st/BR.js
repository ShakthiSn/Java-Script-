(function executeRule(current, previous /*null when async*/ ) {

    var s = new sn_ws.SOAPMessageV2('dev309990', 'insert');
    s.setStringParameterNoEscape('insert.state', current.state);
    s.setStringParameterNoEscape('insert.short_description', current.short_description);
    s.setStringParameterNoEscape('insert.contact_type', current.contact_type);
    s.setStringParameterNoEscape('insert.description', current.description);
    s.setStringParameterNoEscape('insert.caller_id', current.caller_id);
    var response = s.execute();
    var reBody = response.getBody();
    var xmlDoc = new XMLDocument2('reBody');
    xmlDoc.parseXML(reBody);
    current.correlation_id = xmlDoc.getNodeText("//sys_id");
    current.correlation_display = xmlDoc.getNodeText("//number");
    current.update();
})(current, previous);