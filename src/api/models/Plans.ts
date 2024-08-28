/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Plans = {
    readonly id: number;
    version: 1 | 2;
    category: 'trial' | 'free' | 'individual' | 'team' | 'enterprise' | 'custom';
    name: string;
    readonly price: number;
    credit: number;
    user_seat: number;
    readonly credit_addon_price: number;
    readonly user_seat_addon_price: number;
};

