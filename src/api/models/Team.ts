/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type Team = {
    readonly id: number;
    readonly user: User;
    role?: 'owner' | 'manager' | 'member' | 'billing_manager';
    is_deleted?: boolean;
};

