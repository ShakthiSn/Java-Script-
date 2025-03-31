function stateUIAction(call)
{
	current.setValue('u_state',call);
	current.update();
	action.setRedirectURL(current);
}



stateUIAction('inprogress');
stateUIAction('onhold');
stateUIAction('resolved');
stateUIAction('closed');
stateUIAction('cancelled');