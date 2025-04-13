(function runMailScript( /* GlideRecord */ current, /* TemplatePrinter */ template,
    /* Optional EmailOutbound */
    email, /* Optional GlideRecord */ email_action,
    /* Optional GlideRecord */
    event) {

    // Add your code here

    template.print('<p>' + event.parm1 + '</p>');
    gs.log(event.parm1);
    var Assgroup = current.u_assignment_group;
    var gr = new GlideRecord('sys_user_grmember');
    gr.addQuery('group', Assgroup);
    gr.query();
    while (gr.next()) {
        email.addAddress('cc', gr.user.email);
        gs.log(gr.user.email);
    }

    email.setSubject('Hello this is Tenant !');
    email.setBody('Hello gi');
    email.setFrom('rjshakthi4498@gmail.com');
    email.setReplyTo('abc@gmail.com');



})(current, template, email, email_action, event);