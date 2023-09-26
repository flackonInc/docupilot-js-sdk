/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Invitation = {
    readonly id: number;
    readonly workspace: string;
    readonly sender: string;
    email: string;
    role: 'manager' | 'member' | 'billing_manager';
    readonly created_at: string;
    readonly expires_at: string;
    readonly accepted_at: string | null;
    readonly is_accepted: boolean;
    readonly invite_key: string;
};

