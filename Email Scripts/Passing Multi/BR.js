(function executeRule(current, previous /*null when async*/ ) {


    var arrobj = {};
    arrobj.pSd = previous.u_string_7;
    arrobj.pDs = previous.u_string_8;
    arrobj.pAss = previous.u_assigned_to;
    arrobj.pEmail = previous.u_email;
    //gs.log(arrobj.pemail);
    var strobj = JSON.stringify(arrobj);
    gs.eventQueue('short.changes.fired.tenant', current, strobj, '');

})(current, previous);