var getCallerInformation = Class.create();
getCallerInformation.prototype = Object.extendsObject(AbstractAjaxProcessor, {
childIncidentDetails: function() {
    var inc = new GlideRecord('incident');
    inc.addQuery('sys_id', this.getParameter('sysparm_inc'));
    inc.query();

    var str = [];
    if (inc.next()) {
        //str=inc.getValue('short_description')+':'+inc.getValue('description');
        str.push(inc.short_description);
        str.push(inc.description);    // if have multi field value then go array.
    }
    //  return str.toString(); it will seprate the values using ',' short and des have so many , and .
    return str.join('^^^');

},



type: 'getCallerInformation'
});