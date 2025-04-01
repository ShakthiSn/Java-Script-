var getCallerInformation = Class.create();
getCallerInformation.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getAssignedTo2: function () {

        var gr2 = new GlideRecord('u_shipping_case');
        gr2.addQuery('sys_id', this.getParameter('sysparm_caseid'));
        gr2.query();

        var isvalid = false;
        if (gr2.next()) {
            gr2.u_assigned_to = this.getParameter('sysparm_asto');
            gr2.u_state = 'inprogress';
            gr2.update();
            //gs.log(gr2.getValue('u_assigned_to'));
            return true;

        }
        return isvalid;
    },



    type: 'getCallerInformation'
});