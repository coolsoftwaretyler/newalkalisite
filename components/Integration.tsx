const Integrations = props => {
    const integration = [
        { "name": "Facebook", "fileName": "facebook" },
        { "name": "Hubspot", "fileName": "hubspot" },
        { "name": "Outlook", "fileName": "outlook" },
        { "name": "Shopify", "fileName": "shopify" },
        { "name": "Mailchimp", "fileName": "mailchimp" },
        { "name": "Asana", "fileName": "asana" },
        { "name": "Calendly", "fileName": "calendly" },
        { "name": "Constant Contact", "fileName": "constant-contact" },
        { "name": "Gsuite", "fileName": "gsuite" },
        { "name": "Infusionsoft", "fileName": "infusionsoft" },
        { "name": "Instagram", "fileName": "instagram" },
        { "name": "Quickbooks", "fileName": "quickbooks" },
        { "name": "Salesforce", "fileName": "salesforce" },
        { "name": "Service Titan", "fileName": "service-titan" },
        { "name": "Slack", "fileName": "slack" },
        { "name": "Zapier", "fileName": "zapier" },
        { "name": "Zendesk", "fileName": "zendesk" }
    ];
    return (
        <div className={`${props.style}`}>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-10 max-w-7xl m-auto">
                {
                    integration.map((integration) =>
                        <div className="IntegrationIcon text-center py-16 m-auto shadow-2xl h-36 w-36 rounded-full bg-center duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" style={{ backgroundImage: `url("/images/icons/${integration.fileName}.png")` }}>
                            <span className="IconSpan transition duration-500 pointer-events-none shadow-2xl">{integration.name}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Integrations;
