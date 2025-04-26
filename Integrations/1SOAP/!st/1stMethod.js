<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inc="http://www.service-now.com/incident">
    <soapenv:Header />
    <soapenv:Body>
        <inc:insert>

            <caller_id>${insert.caller_id}</caller_id>

            <contact_type>${insert.contact_type}</contact_type>

            <description>${insert.description}</description>

            <short_description>${insert.short_description}</short_description>

            <state>${insert.state}</state>



        </inc:insert>
    </soapenv:Body>
</soapenv:Envelope>