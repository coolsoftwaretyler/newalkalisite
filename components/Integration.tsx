import Image from 'next/image'

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
                        <div className="relative m-auto" style={{fontSize: '0'}}>
                            <Image
                                height={144}
                                width={144}
                                quality={100}
                                className="object-center object-cover pointer-events-none rounded-full duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                src={`/images/icons/${integration.fileName}.png`}
                                alt={props.title}
                            />
                        <div className="IntegrationIconContainer relative z-1">
                        <div className="IntegrationIcon text-center py-16 m-auto shadow-2xl h-36 w-36 rounded-full bg-center">
                                <span className="IconSpan transition duration-500 pointer-events-none shadow-2xl relative-30">{integration.name}</span>
                            </div>    
                        </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Integrations;
