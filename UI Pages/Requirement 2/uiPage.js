function validForm() {
    var resNote = gel('rnote').value;
    var resCode = gel('rcode').value;
    if (resCode.trim() == '') {
        alert('Resolution Code Mandatory !');
        return false;
    }

    if (resNote.trim() == '') {
        alert('Resolution Note Mandatory !');
        return false;
    }

    var ga = new GlideAjax('getCallerInformation');
    ga.addParam('sysparm_name', 'setResolutionInfo');
    ga.addParam('sysparm_caseid', g_form.getUniqueValue());
    ga.addParam('sysparm_rcode', resCode);
    ga.addParam('sysparm_rnote', resNote);
    ga.getXMLAnswer(callback);


    function callback(call) {
        if (call == 'true') {
            parent.window.location.reload();
            alert('Resolved SuccessFully!');
        }
    }

}


function onCancel() {
    GlideDialogWindow.get().destroy();

}