(function runMailScript( /* GlideRecord */ current, /* TemplatePrinter */ template,
    /* Optional EmailOutbound */
    email, /* Optional GlideRecord */ email_action,
    /* Optional GlideRecord */
    event) {
		gs.log('line 6');

    var gr = new GlideRecord('incident');
    gr.addQuery('caller_id', current.caller_id);
    gr.addQuery('state', 7);
    gr.query();

    var output = '';
    if (gr.hasNext()) {
        output += '<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; font-size: 14px;">';
        output += '<thead>';
        output += '<tr>';
        output += '<th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Incident</th>';
        output += '<th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Caller</th>';
        output += '<th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Short description</th>';
		output += '<th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">State</th>';
        output += '</tr>';
        output += '</thead>';
		output+='<tbody>';
		while (gr.next()) {
			output+='<tr>';
			output+='<td style="border: 1px solid #ccc; padding: 8px;">'+gr.getValue('number')+'</td>';
			output+='<td style="border: 1px solid #ccc; padding: 8px;">'+gr.getDisplayValue('caller_id')+'</td>';
			output+='<td style="border: 1px solid #ccc; padding: 8px;">'+gr.getValue('short_description')+'</td>';
			output+='<td style="border: 1px solid #ccc; padding: 8px;">'+gr.getDisplayValue('state')+'</td>';
			output += '</tr>';
    }   

    output += '</tbody></table>';
} else {
    output += '<p>No closed incidents found for this caller.</p>';
}

template.print(output);

})(current, template, email, email_action, event);


//BR
gs.eventQueue('event regstry name',current,'','');
/*Hello ${caller_id},

I have Created the Award Nomination Request Record Successfully.

${URI}

Request No : ${URI_REF}

${mail_script:closed.email.script} //emal scrpt name

Many Thanks,

Sakthivel R*/
