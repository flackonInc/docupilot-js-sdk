/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OneDriveDelivery = {
    readonly id: number;
    account?: number | null;
    name: string;
    type?: OneDriveDelivery.type;
    folder?: string;
}

export namespace OneDriveDelivery {

    export enum type {
        EMAIL = 'email',
        WEBHOOK = 'webhook',
        DOCU_SIGN = 'docu_sign',
        SIGN_NOW = 'sign_now',
        ZOHO_CRM = 'zoho_crm',
        DROPBOX = 'dropbox',
        GOOGLE_DRIVE = 'google_drive',
        PODIO = 'podio',
        ONE_DRIVE = 'one_drive',
        EVERSIGN = 'eversign',
        HELLOSIGN = 'hellosign',
        AWS_S3 = 'aws_s3',
    }


}