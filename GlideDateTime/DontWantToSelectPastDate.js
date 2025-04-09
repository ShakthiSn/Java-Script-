//Clint Script: OnChange

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        return;
    }

    var ga = new GlideAjax('getCallerInformation');
    ga.addParam('sysparm_name', 'plannedStartDateValidation');
    ga.addParam('sysparm_date', newValue);
    ga.getXMLAnswer(callback);

    function callback(call) {
        if (call == 'false') {
            g_form.clearValue('u_planned_start_date');
            g_form.showFieldMsg('u_planned_start_date', 'Hey Its wrong ! Dont Select Past date ', 'error');
        }
    }

}



























//Script Include

var getCallerInformation = Class.create();
getCallerInformation.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    plannedStartDateValidation: function () {

        var givenDate = new GlideDateTime(this.getParameter('sysparm_date'));
        var today = new GlideDateTime();

        var valid = false;
        if (givenDate > today) {
            return true;
        }
        else {
            return false;
        }
        return valid;
    },

    type: 'getCallerInformation'
});