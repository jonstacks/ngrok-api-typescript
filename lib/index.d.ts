import { Wretcher } from 'wretch';
import * as t from './types';
export * from './types';
interface Config {
    apiToken: string;
    baseUrl: string;
}
export declare class Ngrok {
    token: string;
    baseUrl: string;
    rest: Wretcher;
    /**
     * Creates an instance of the Ngrok REST client
     * @constructor
     * @param {Object} config - config.apiToken and config.baseUrl
     */
    constructor({ baseUrl, apiToken }: Config);
    AbuseReports: {
        /** Creates a new abuse report which will be reviewed by our system and abuse response team. This API is only available to authorized accounts. Contact abuse@ngrok.com to request access */
        create: (arg: t.AbuseReportCreate) => Promise<t.AbuseReport>;
        /** Get the detailed status of abuse report by ID. */
        get: (arg: t.Item) => Promise<t.AbuseReport>;
    };
    APIKeys: {
        /** Create a new API key. The generated API key can be used to authenticate to the ngrok API. */
        create: (arg: t.APIKeyCreate) => Promise<t.APIKey>;
        /** Delete an API key by ID */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get the details of an API key by ID. */
        get: (arg: t.Item) => Promise<t.APIKey>;
        /** List all API keys owned by this account */
        list: () => Promise<Array<t.APIKey>>;
        _pagedList: (arg: t.Paging) => Promise<t.APIKeyList>;
        _asyncList: () => AsyncGenerator<t.APIKey, void, unknown>;
        /** Update attributes of an API key by ID. */
        update: (arg: t.APIKeyUpdate) => Promise<t.APIKey>;
    };
    CertificateAuthorities: {
        /** Upload a new Certificate Authority */
        create: (arg: t.CertificateAuthorityCreate) => Promise<t.CertificateAuthority>;
        /** Delete a Certificate Authority */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about a certficate authority */
        get: (arg: t.Item) => Promise<t.CertificateAuthority>;
        /** List all Certificate Authority on this account */
        list: () => Promise<Array<t.CertificateAuthority>>;
        _pagedList: (arg: t.Paging) => Promise<t.CertificateAuthorityList>;
        _asyncList: () => AsyncGenerator<t.CertificateAuthority, void, unknown>;
        /** Update attributes of a Certificate Authority by ID */
        update: (arg: t.CertificateAuthorityUpdate) => Promise<t.CertificateAuthority>;
    };
    Credentials: {
        /** Create a new tunnel authtoken credential. This authtoken credential can be used to start a new tunnel session. The response to this API call is the only time the generated token is available. If you need it for future use, you must save it securely yourself. */
        create: (arg: t.CredentialCreate) => Promise<t.Credential>;
        /** Delete a tunnel authtoken credential by ID */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about a tunnel authtoken credential */
        get: (arg: t.Item) => Promise<t.Credential>;
        /** List all tunnel authtoken credentials on this account */
        list: () => Promise<Array<t.Credential>>;
        _pagedList: (arg: t.Paging) => Promise<t.CredentialList>;
        _asyncList: () => AsyncGenerator<t.Credential, void, unknown>;
        /** Update attributes of an tunnel authtoken credential by ID */
        update: (arg: t.CredentialUpdate) => Promise<t.Credential>;
    };
    EndpointConfigurations: {
        /** Create a new endpoint configuration */
        create: (arg: t.EndpointConfigurationCreate) => Promise<t.EndpointConfiguration>;
        /** Delete an endpoint configuration. This operation will fail if the endpoint configuration is still referenced by any reserved domain or reserved address. */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Returns detailed information about an endpoint configuration */
        get: (arg: t.Item) => Promise<t.EndpointConfiguration>;
        /** Returns a list of all endpoint configurations on this account */
        list: () => Promise<Array<t.EndpointConfiguration>>;
        _pagedList: (arg: t.Paging) => Promise<t.EndpointConfigurationList>;
        _asyncList: () => AsyncGenerator<t.EndpointConfiguration, void, unknown>;
        /** Updates an endpoint configuration. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API. */
        update: (arg: t.EndpointConfigurationUpdate) => Promise<t.EndpointConfiguration>;
    };
    EventStreams: {
        /** Create a new Event Stream. It will not apply to anything until you associate it with one or more Endpoint Configs. */
        create: (arg: t.EventStreamCreate) => Promise<t.EventStream>;
        /** Delete an Event Stream. Associated Event Destinations will be preserved. */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an Event Stream by ID. */
        get: (arg: t.Item) => Promise<t.EventStream>;
        /** List all Event Streams available on this account. */
        list: () => Promise<Array<t.EventStream>>;
        _pagedList: (arg: t.Paging) => Promise<t.EventStreamList>;
        _asyncList: () => AsyncGenerator<t.EventStream, void, unknown>;
        /** Update attributes of an Event Stream by ID. */
        update: (arg: t.EventStreamUpdate) => Promise<t.EventStream>;
    };
    EventDestinations: {
        /** Create a new Event Destination. It will not apply to anything until it is associated with an Event Stream, and that Event Stream is associated with an Endpoint Config. */
        create: (arg: t.EventDestinationCreate) => Promise<t.EventDestination>;
        /** Delete an Event Destination. If the Event Destination is still referenced by an Event Stream, this will throw an error until that Event Stream has removed that reference. */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an Event Destination by ID. */
        get: (arg: t.Item) => Promise<t.EventDestination>;
        /** List all Event Destinations on this account. */
        list: () => Promise<Array<t.EventDestination>>;
        _pagedList: (arg: t.Paging) => Promise<t.EventDestinationList>;
        _asyncList: () => AsyncGenerator<t.EventDestination, void, unknown>;
        /** Update attributes of an Event Destination. */
        update: (arg: t.EventDestinationUpdate) => Promise<t.EventDestination>;
    };
    EventSubscriptions: {
        /** Create an Event Subscription. */
        create: (arg: t.EventSubscriptionCreate) => Promise<t.EventSubscription>;
        /** Delete an Event Subscription. */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get an Event Subscription by ID. */
        get: (arg: t.Item) => Promise<t.EventSubscription>;
        /** List this Account's Event Subscriptions. */
        list: () => Promise<Array<t.EventSubscription>>;
        _pagedList: (arg: t.Paging) => Promise<t.EventSubscriptionList>;
        _asyncList: () => AsyncGenerator<t.EventSubscription, void, unknown>;
        /** Update an Event Subscription. */
        update: (arg: t.EventSubscriptionUpdate) => Promise<t.EventSubscription>;
    };
    EventSources: {
        /** Add an additional type for which this event subscription will trigger */
        create: (arg: t.EventSourceCreate) => Promise<t.EventSource>;
        /** Remove a type for which this event subscription will trigger */
        delete: (arg: t.EventSourceItem) => Promise<t.Empty>;
        /** Get the details for a given type that triggers for the given event subscription */
        get: (arg: t.EventSourceItem) => Promise<t.EventSource>;
        /** List the types for which this event subscription will trigger */
        list: (arg: t.EventSourcePaging) => Promise<t.EventSourceList>;
        /** Update the type for which this event subscription will trigger */
        update: (arg: t.EventSourceUpdate) => Promise<t.EventSource>;
    };
    IPPolicies: {
        /** Create a new IP policy. It will not apply to any traffic until you associate to a traffic source via an endpoint configuration or IP restriction. */
        create: (arg: t.IPPolicyCreate) => Promise<t.IPPolicy>;
        /** Delete an IP policy. If the IP policy is referenced by another object for the purposes of traffic restriction it will be treated as if the IP policy remains but has zero rules. */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an IP policy by ID. */
        get: (arg: t.Item) => Promise<t.IPPolicy>;
        /** List all IP policies on this account */
        list: () => Promise<Array<t.IPPolicy>>;
        _pagedList: (arg: t.Paging) => Promise<t.IPPolicyList>;
        _asyncList: () => AsyncGenerator<t.IPPolicy, void, unknown>;
        /** Update attributes of an IP policy by ID */
        update: (arg: t.IPPolicyUpdate) => Promise<t.IPPolicy>;
    };
    IPPolicyRules: {
        /** Create a new IP policy rule attached to an IP Policy. */
        create: (arg: t.IPPolicyRuleCreate) => Promise<t.IPPolicyRule>;
        /** Delete an IP policy rule. */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an IP policy rule by ID. */
        get: (arg: t.Item) => Promise<t.IPPolicyRule>;
        /** List all IP policy rules on this account */
        list: () => Promise<Array<t.IPPolicyRule>>;
        _pagedList: (arg: t.Paging) => Promise<t.IPPolicyRuleList>;
        _asyncList: () => AsyncGenerator<t.IPPolicyRule, void, unknown>;
        /** Update attributes of an IP policy rule by ID */
        update: (arg: t.IPPolicyRuleUpdate) => Promise<t.IPPolicyRule>;
    };
    IPRestrictions: {
        /** Create a new IP restriction */
        create: (arg: t.IPRestrictionCreate) => Promise<t.IPRestriction>;
        /** Delete an IP restriction */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an IP restriction */
        get: (arg: t.Item) => Promise<t.IPRestriction>;
        /** List all IP restrictions on this account */
        list: () => Promise<Array<t.IPRestriction>>;
        _pagedList: (arg: t.Paging) => Promise<t.IPRestrictionList>;
        _asyncList: () => AsyncGenerator<t.IPRestriction, void, unknown>;
        /** Update attributes of an IP restriction by ID */
        update: (arg: t.IPRestrictionUpdate) => Promise<t.IPRestriction>;
    };
    IPWhitelist: {
        /** Create a new IP whitelist entry that will restrict traffic to all tunnel endpoints on the account. */
        create: (arg: t.IPWhitelistEntryCreate) => Promise<t.IPWhitelistEntry>;
        /** Delete an IP whitelist entry. */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an IP whitelist entry by ID. */
        get: (arg: t.Item) => Promise<t.IPWhitelistEntry>;
        /** List all IP whitelist entries on this account */
        list: () => Promise<Array<t.IPWhitelistEntry>>;
        _pagedList: (arg: t.Paging) => Promise<t.IPWhitelistEntryList>;
        _asyncList: () => AsyncGenerator<t.IPWhitelistEntry, void, unknown>;
        /** Update attributes of an IP whitelist entry by ID */
        update: (arg: t.IPWhitelistEntryUpdate) => Promise<t.IPWhitelistEntry>;
    };
    EndpointLoggingModule: {
        replace: (arg: t.EndpointLoggingReplace) => Promise<t.EndpointLogging>;
        get: (arg: t.Item) => Promise<t.EndpointLogging>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointCircuitBreakerModule: {
        replace: (arg: t.EndpointCircuitBreakerReplace) => Promise<t.EndpointCircuitBreaker>;
        get: (arg: t.Item) => Promise<t.EndpointCircuitBreaker>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointCompressionModule: {
        replace: (arg: t.EndpointCompressionReplace) => Promise<t.EndpointCompression>;
        get: (arg: t.Item) => Promise<t.EndpointCompression>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointTLSTerminationModule: {
        replace: (arg: t.EndpointTLSTerminationReplace) => Promise<t.EndpointTLSTermination>;
        get: (arg: t.Item) => Promise<t.EndpointTLSTermination>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointIPPolicyModule: {
        replace: (arg: t.EndpointIPPolicyReplace) => Promise<t.EndpointIPPolicy>;
        get: (arg: t.Item) => Promise<t.EndpointIPPolicy>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointMutualTLSModule: {
        replace: (arg: t.EndpointMutualTLSReplace) => Promise<t.EndpointMutualTLS>;
        get: (arg: t.Item) => Promise<t.EndpointMutualTLS>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointRequestHeadersModule: {
        replace: (arg: t.EndpointRequestHeadersReplace) => Promise<t.EndpointRequestHeaders>;
        get: (arg: t.Item) => Promise<t.EndpointRequestHeaders>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointResponseHeadersModule: {
        replace: (arg: t.EndpointResponseHeadersReplace) => Promise<t.EndpointResponseHeaders>;
        get: (arg: t.Item) => Promise<t.EndpointResponseHeaders>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointOAuthModule: {
        replace: (arg: t.EndpointOAuthReplace) => Promise<t.EndpointOAuth>;
        get: (arg: t.Item) => Promise<t.EndpointOAuth>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointWebhookValidationModule: {
        replace: (arg: t.EndpointWebhookValidationReplace) => Promise<t.EndpointWebhookValidation>;
        get: (arg: t.Item) => Promise<t.EndpointWebhookValidation>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointSAMLModule: {
        replace: (arg: t.EndpointSAMLReplace) => Promise<t.EndpointSAML>;
        get: (arg: t.Item) => Promise<t.EndpointSAML>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    EndpointOIDCModule: {
        replace: (arg: t.EndpointOIDCReplace) => Promise<t.EndpointOIDC>;
        get: (arg: t.Item) => Promise<t.EndpointOIDC>;
        delete: (arg: t.Item) => Promise<t.Empty>;
    };
    ReservedAddrs: {
        /** Create a new reserved address. */
        create: (arg: t.ReservedAddrCreate) => Promise<t.ReservedAddr>;
        /** Delete a reserved address. */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get the details of a reserved address. */
        get: (arg: t.Item) => Promise<t.ReservedAddr>;
        /** List all reserved addresses on this account. */
        list: () => Promise<Array<t.ReservedAddr>>;
        _pagedList: (arg: t.Paging) => Promise<t.ReservedAddrList>;
        _asyncList: () => AsyncGenerator<t.ReservedAddr, void, unknown>;
        /** Update the attributes of a reserved address. */
        update: (arg: t.ReservedAddrUpdate) => Promise<t.ReservedAddr>;
        /** Detach the endpoint configuration attached to a reserved address. */
        deleteEndpointConfig: (arg: t.Item) => Promise<t.Empty>;
    };
    ReservedDomains: {
        /** Create a new reserved domain. */
        create: (arg: t.ReservedDomainCreate) => Promise<t.ReservedDomain>;
        /** Delete a reserved domain. */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get the details of a reserved domain. */
        get: (arg: t.Item) => Promise<t.ReservedDomain>;
        /** List all reserved domains on this account. */
        list: () => Promise<Array<t.ReservedDomain>>;
        _pagedList: (arg: t.Paging) => Promise<t.ReservedDomainList>;
        _asyncList: () => AsyncGenerator<t.ReservedDomain, void, unknown>;
        /** Update the attributes of a reserved domain. */
        update: (arg: t.ReservedDomainUpdate) => Promise<t.ReservedDomain>;
        /** Detach the certificate management policy attached to a reserved domain. */
        deleteCertificateManagementPolicy: (arg: t.Item) => Promise<t.Empty>;
        /** Detach the certificate attached to a reserved domain. */
        deleteCertificate: (arg: t.Item) => Promise<t.Empty>;
        /** Detach the http endpoint configuration attached to a reserved domain. */
        deleteHTTPEndpointConfig: (arg: t.Item) => Promise<t.Empty>;
        /** Detach the https endpoint configuration attached to a reserved domain. */
        deleteHTTPSEndpointConfig: (arg: t.Item) => Promise<t.Empty>;
    };
    SSHCertificateAuthorities: {
        /** Create a new SSH Certificate Authority */
        create: (arg: t.SSHCertificateAuthorityCreate) => Promise<t.SSHCertificateAuthority>;
        /** Delete an SSH Certificate Authority */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an SSH Certficate Authority */
        get: (arg: t.Item) => Promise<t.SSHCertificateAuthority>;
        /** List all SSH Certificate Authorities on this account */
        list: () => Promise<Array<t.SSHCertificateAuthority>>;
        _pagedList: (arg: t.Paging) => Promise<t.SSHCertificateAuthorityList>;
        _asyncList: () => AsyncGenerator<t.SSHCertificateAuthority, void, unknown>;
        /** Update an SSH Certificate Authority */
        update: (arg: t.SSHCertificateAuthorityUpdate) => Promise<t.SSHCertificateAuthority>;
    };
    SSHCredentials: {
        /** Create a new ssh_credential from an uploaded public SSH key. This ssh credential can be used to start new tunnels via ngrok's SSH gateway. */
        create: (arg: t.SSHCredentialCreate) => Promise<t.SSHCredential>;
        /** Delete an ssh_credential by ID */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an ssh_credential */
        get: (arg: t.Item) => Promise<t.SSHCredential>;
        /** List all ssh credentials on this account */
        list: () => Promise<Array<t.SSHCredential>>;
        _pagedList: (arg: t.Paging) => Promise<t.SSHCredentialList>;
        _asyncList: () => AsyncGenerator<t.SSHCredential, void, unknown>;
        /** Update attributes of an ssh_credential by ID */
        update: (arg: t.SSHCredentialUpdate) => Promise<t.SSHCredential>;
    };
    SSHHostCertificates: {
        /** Create a new SSH Host Certificate */
        create: (arg: t.SSHHostCertificateCreate) => Promise<t.SSHHostCertificate>;
        /** Delete an SSH Host Certificate */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an SSH Host Certficate */
        get: (arg: t.Item) => Promise<t.SSHHostCertificate>;
        /** List all SSH Host Certificates issued on this account */
        list: () => Promise<Array<t.SSHHostCertificate>>;
        _pagedList: (arg: t.Paging) => Promise<t.SSHHostCertificateList>;
        _asyncList: () => AsyncGenerator<t.SSHHostCertificate, void, unknown>;
        /** Update an SSH Host Certificate */
        update: (arg: t.SSHHostCertificateUpdate) => Promise<t.SSHHostCertificate>;
    };
    SSHUserCertificates: {
        /** Create a new SSH User Certificate */
        create: (arg: t.SSHUserCertificateCreate) => Promise<t.SSHUserCertificate>;
        /** Delete an SSH User Certificate */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about an SSH User Certficate */
        get: (arg: t.Item) => Promise<t.SSHUserCertificate>;
        /** List all SSH User Certificates issued on this account */
        list: () => Promise<Array<t.SSHUserCertificate>>;
        _pagedList: (arg: t.Paging) => Promise<t.SSHUserCertificateList>;
        _asyncList: () => AsyncGenerator<t.SSHUserCertificate, void, unknown>;
        /** Update an SSH User Certificate */
        update: (arg: t.SSHUserCertificateUpdate) => Promise<t.SSHUserCertificate>;
    };
    TLSCertificates: {
        /** Upload a new TLS certificate */
        create: (arg: t.TLSCertificateCreate) => Promise<t.TLSCertificate>;
        /** Delete a TLS certificate */
        delete: (arg: t.Item) => Promise<t.Empty>;
        /** Get detailed information about a TLS certificate */
        get: (arg: t.Item) => Promise<t.TLSCertificate>;
        /** List all TLS certificates on this account */
        list: () => Promise<Array<t.TLSCertificate>>;
        _pagedList: (arg: t.Paging) => Promise<t.TLSCertificateList>;
        _asyncList: () => AsyncGenerator<t.TLSCertificate, void, unknown>;
        /** Update attributes of a TLS Certificate by ID */
        update: (arg: t.TLSCertificateUpdate) => Promise<t.TLSCertificate>;
    };
    TunnelSessions: {
        /** List all online tunnel sessions running on this account. */
        list: () => Promise<Array<t.TunnelSession>>;
        _pagedList: (arg: t.Paging) => Promise<t.TunnelSessionList>;
        _asyncList: () => AsyncGenerator<t.TunnelSession, void, unknown>;
        /** Get the detailed status of a tunnel session by ID */
        get: (arg: t.Item) => Promise<t.TunnelSession>;
        /** Issues a command instructing the ngrok agent to restart. The agent restarts itself by calling exec() on platforms that support it. This operation is notably not supported on Windows. When an agent restarts, it reconnects with a new tunnel session ID. */
        restart: (arg: t.Item) => Promise<t.Empty>;
        /** Issues a command instructing the ngrok agent that started this tunnel session to exit. */
        stop: (arg: t.Item) => Promise<t.Empty>;
        /** Issues a command instructing the ngrok agent to update itself to the latest version. After this call completes successfully, the ngrok agent will be in the update process. A caller should wait some amount of time to allow the update to complete (at least 10 seconds) before making a call to the Restart endpoint to request that the agent restart itself to start using the new code. This call will never update an ngrok agent to a new major version which could cause breaking compatibility issues. If you wish to update to a new major version, that must be done manually. Still, please be aware that updating your ngrok agent could break your integration. This call will fail in any of the following circumstances: there is no update available the ngrok agent's configuration disabled update checks the agent is currently in process of updating the agent has already successfully updated but has not yet been restarted */
        update: (arg: t.TunnelSessionsUpdate) => Promise<t.Empty>;
    };
    Tunnels: {
        /** List all online tunnels currently running on the account. */
        list: () => Promise<Array<t.Tunnel>>;
        _pagedList: (arg: t.Paging) => Promise<t.TunnelList>;
        _asyncList: () => AsyncGenerator<t.Tunnel, void, unknown>;
    };
}
//# sourceMappingURL=index.d.ts.map