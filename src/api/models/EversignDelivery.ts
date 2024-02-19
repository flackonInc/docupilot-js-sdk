/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EversignDelivery = {
    readonly id: number;
    account: number;
    signers: Array<{
        pin?: string;
        name: string;
        email: string;
        order?: string;
    }>;
    recipients?: Array<{
        name: string;
        email: string;
    }>;
    name: string;
    type?: 'eversign';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    title?: string | null;
    message?: string | null;
    use_signer_order?: boolean;
    reminders?: boolean;
    require_all_signers?: boolean;
    expires_in?: number | null;
    enable_optional_signers?: boolean;
};

