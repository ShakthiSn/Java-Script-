(function executeRule(current, previous /*null when async*/ ) {

    var callerVP = current.u_caller.vip;
    var callerCT = current.u_caller.u_contract_type;
    if (callerCT == false && callerVP == false) {
        gs.addErrorMessage("Should Select VIP and Contractor type Caller");
        current.setAbortAction(true);
    }

})(current, previous);