//Script INclude

var getRequester = Class.create();
getRequester.prototype = Object.extendsObject(AbstractAjaxProcessor, {


    requesterDetails: function() {
        var gr = new GlideRecord('sys_user');
        gr.addQuery('user_name', this.getParameter('sysparm_req'));
        gr.query();
        if (gr.next()) {
            gs.log(gr.email);
            return gr.email + "&" + gr.getDisplayValue('manager') + "&" + gr.mobile_phone;
        }
    },
    type: 'getRequester'
});


//Client Script

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        g_form.clearValue('u_mobile_number');
        g_form.clearValue('u_manager');
        g_form.clearValue('u_email');
        return;
    }
    var gr = new GlideAjax('getRequester');
    gr.addParam('sysparm_name', 'requesterDetails');
    gr.addParam('sysparm_req', newValue);
    gr.getXML(res);


    function res(call) {
        var answe = call.responseXML.documentElement.getAttribute('answer');
        var sm = answe.split("&");
        g_form.setValue('u_mobile_number', sm[2]);
        g_form.setValue('u_manager', sm[1]);
        g_form.setValue('u_email', sm[0]);

    }




}