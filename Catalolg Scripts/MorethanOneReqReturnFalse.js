var managerInformation = Class.create();
managerInformation.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    managerDetails: function() {
        var gr = new GlideRecord('sys_user');
        gr.addQuery('sys_id', this.getParameter('sysparm_requester'));
        gr.query();
        if (gr.next()) {

            return gr.manager + ',' + gr.location.country.getDisplayValue();
        }

    },

    userDayRequest: function() {
        var user = this.getParameter('sysparm_user');
        var gr = new GlideRecord('sc_req_item');
        gr.addQuery('requested_for', user);
        gr.addQuery('cat_item', 'b8bfce01c35a6210a70498ec0501314b');
        gr.addQuery('sys_created_on', '>=', gs.beginningOfToday());
        gr.addQuery('sys_created_on', '<=', gs.endOfToday());
        gr.query();

        if (gr.next()) {
            gs.log("Request found: " + gr.number);
            return true;
        } else {
            gs.log("No request found for user: " + user);
            return false;
        }
    },


    type: 'managerInformation'
});


//Client Script


function onSubmit() {
    var user = g_form.getValue('requested_by');

    if (!g_form.ajaxComplete) {
        getData();
        return false;
    }

    function getData() {
        var ga = new GlideAjax('managerInformation');
        ga.addParam('sysparm_name', 'userDayRequest');
        ga.addParam('sysparm_user', user);
        ga.getXMLAnswer(callback);

        function callback(call) {
            alert(call);
            if (call == 'true') {
                g_form.addErrorMessage('You Cant able to Submit more than one request in a Day!');
                //return false;
            } else {
                g_form.ajaxComplete = true;
                g_form.submit();
                //return true;
            }
        }
    }
}


new 

    var checkSubmission = Class.create();
checkSubmission.prototype = Object.extendsObject(AbstractAjaxProcessor, {


    getDetails: function() {
        var gr = new GlideRecord('sc_req_item');
        gr.addQuery('requested_for', this.getParameter('sysparm_req'));
        gr.addQuery('sys_created_on', '>=', gs.beginningOfDay());
        gr.addQuery('sys_created_on', '<=', gs.endOfDay());
        gr.query();
        if (gr.hasNext()) {
            gs.log('true');
            return true;
        } else {
            gs.log('false');
            return false;
        }

    },

    type: 'checkSubmission'
});


var alreadySubmitted = false;

function onSubmit() {
    if (alreadySubmitted) return true; // skip recheck on manual submit

    var reqby = g_form.getValue('requested_for');
    var ga = new GlideAjax('checkSubmission');
    ga.addParam('sysparm_name', 'getDetails');
    ga.addParam('sysparm_req', reqby);
    ga.getXMLAnswer(callback);

    return false; // stop immediate submit until check completes

    function callback(response) {
        if (response == 'false') {
            alreadySubmitted = true;
            g_form.orderNow(); // ✅ proper submission for catalog item
        } else {
            alert('Submission Blocked! You already have a request today.');
        }
    }
}
