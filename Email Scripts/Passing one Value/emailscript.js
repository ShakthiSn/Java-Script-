(function runMailScript( /* GlideRecord */ current, /* TemplatePrinter */ template,
    /* Optional EmailOutbound */
    email, /* Optional GlideRecord */ email_action,
    /* Optional GlideRecord */
    event) {

    // Add your code here

    template.print('<p>' + event.parm1 + '</p>');

})(current, template, email, email_action, event);

//get.tenant.br.info