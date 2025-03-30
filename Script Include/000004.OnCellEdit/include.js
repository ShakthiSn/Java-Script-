var getCallerInformation = Class.create();
getCallerInformation.prototype = Object.extendsObject(AbstractAjaxProcessor, {
setListValue: function() {
    var lst = new GlideRecord('sys_user');
    lst.addQuery('sys_id', this.getParameter('sysparm_caller'));
    lst.query();
    gs.log('69');
    var email = '';
    var loc = '';
    var dep = '';
    if (lst.next()) {
        gs.log('74');
        email = lst.getValue('email');
        dep = lst.getValue('department');
        loc = lst.getValue('location');
        gs.log('78');
    }

    var listValue = this.getParameter('sysparm_case').split(',');
    gs.log('82');
    var isupdated = false;

    for (var i = 0; i < listValue.length; i++) {
        gs.log('86');
        var gr1 = new GlideRecord('u_shipping_case');
        gr1.addQuery('sys_id', listValue[i]);
        gr1.query();
        gs.log('90');
        while (gr1.next()) {
            gs.log('92');
            gr1.setValue('u_caller', this.getParameter('sysparm_caller'));
            gr1.setValue('u_location', loc);
            gr1.setValue('u_email', email);
            gr1.setValue('u_department', dep);

            gr1.update();
            gs.log('99');

            isupdated = true;
        }
    }
    gs.log('104');
    return isupdated;
},

type: 'getCallerInformation'
});