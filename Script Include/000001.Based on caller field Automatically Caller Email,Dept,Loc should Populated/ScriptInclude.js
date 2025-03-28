var getCallerInformation = Class.create();
getCallerInformation.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    
getCallerDetails: function() {
    gs.log('4');
    var gr = new GlideRecord('sys_user');
    gr.addQuery('sys_id', this.getParameter('sysparm_caller'));
    gs.log('17');
    gr.query();
    gs.log('9');

    var callstr = '';
    if (gr.next()) {
        gs.log('13');
        callstr = gr.getValue('email') + ":" + gr.getValue('department') + ':' + gr.getValue('location');
        gs.log('15');
    }
    gs.log('17');
    return callstr;
},
type: 'getCallerInformation'
});