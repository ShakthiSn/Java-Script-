// current.setValue('u_state', 'inprogress');
// current.update();
// action.setRedirectURL(current);
function checkAssignedTo() {
    var assignedTo = g_form.getValue('u_assigned_to');
    if (assignedTo == '') {
        g_form.hideFieldMsg('u_assigned_to', true);
        g_form.showFieldMsg('u_assigned_to', 'Assigned to Field is Should not Empty !', 'error');
        return false;

    } else {
        gsftSubmit(null, g_form.getFormElement(), 'inprogress_state');

    }

}
if (typeof window == 'undefined') {
    stateUIAction('inprogress');
    //    current.setValue('u_state', 'inprogress');
    //   current.update();
    //   action.setRedirectURL(current);
}


//current.u_state=='calcelled'||current.u_state=='closed'||current.u_state=='resolved'||current.u_state=='new'
// Action Name : inprogress_state
//Onclick : checkAssignedTo()