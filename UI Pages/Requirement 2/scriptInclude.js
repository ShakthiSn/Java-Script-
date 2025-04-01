var getCallerInformation = Class.create();
getCallerInformation.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    setResolutionInfo: function () {
        var gr = new GlideRecord('u_shipping_case');
        gr.addQuery('sys_id', this.getParameter('sysparm_caseid'));
        gr.query();
        var isUpdated = false;
        if (gr.next()) {
            gr.u_resolution_code = this.getParameter('sysparm_rcode');
            gr.u_string_3 = this.getParameter('sysparm_rnote');

            gr.update();
            return true;
        }
        return isUpdated;

    },



    type: 'getCallerInformation'
});