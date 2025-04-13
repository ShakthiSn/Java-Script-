(function runMailScript( /* GlideRecord */ current, /* TemplatePrinter */ template,
    /* Optional EmailOutbound */
    email, /* Optional GlideRecord */ email_action,
    /* Optional GlideRecord */
    event) {

    var obj = JSON.parse(event.parm1);

    template.print('<p>' + obj.pSd + '</p>')

})(current, template, email, email_action, event);