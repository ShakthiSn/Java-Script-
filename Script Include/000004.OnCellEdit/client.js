function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    var saveAndClose = true;

    var ga = new GlideAjax('getCallerInformation');
    ga.addParam('sysparm_name', 'setListValue');
    ga.addParam('sysparm_caller', newValue);
    ga.addParam('sysparm_case', sysIDs);
    ga.getXMLAnswer(cl);
    alert(typeof cl);
    alert('line 9');

    function cl(call) {
        alert(typeof call);
        if (call == 'true') {
            alert('line 13');
            setTimeout(function() {
                this.window.location.reload();
            }, 3000);
        }
    }


    callback(saveAndClose);
}