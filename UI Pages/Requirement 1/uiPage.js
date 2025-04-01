function validForm() {
    var assignedTo = gel('assto').value;
    if (assignedTo.trim() == '') {
        alert('Assigned to Value is Mandatory !');
        return false;

    } else {
        var ga = new GlideAjax('getCallerInformation');
        ga.addParam('sysparm_name', 'getAssignedTo2');
        ga.addParam('sysparm_caseid', g_form.getUniqueValue());
        ga.addParam('sysparm_asto', assignedTo);
        ga.getXMLAnswer(callback);


        function callback(call) {
            if (call == 'true') {
                alert('Case Has been Assigned Successfully');
                parent.window.location.reload();
                GlideDialogWindow.get().destroy();
            }
        }


    }

}

function onCancel() {
    GlideDialogWindow.get().destroy();
}

//inprogress_window_selection_popup