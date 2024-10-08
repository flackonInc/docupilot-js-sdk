/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatThreads } from '../models/ChatThreads';
import type { CreateCustomerThreadInput } from '../models/CreateCustomerThreadInput';
import type { CreateCustomerThreadOutput } from '../models/CreateCustomerThreadOutput';
import type { ThreadMessages } from '../models/ThreadMessages';
import type { UpdateCustomerThreadInput } from '../models/UpdateCustomerThreadInput';
import type { UpdateCustomerThreadOutput } from '../models/UpdateCustomerThreadOutput';
import type { UpdateThreadName } from '../models/UpdateThreadName';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class AiChatService {

    /**
     * List all chat threads
     * @returns ChatThreads
     * @throws ApiError
     */
    public static listAllChatThreads({
        ordering,
        search,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<ChatThreads>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai-chat/threads/',
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * create new customer thread
     * @returns CreateCustomerThreadOutput
     * @throws ApiError
     */
    public static createNewCustomerThread({
        requestBody,
    }: {
        requestBody: OmitReadonly<CreateCustomerThreadInput>,
    }): CancelablePromise<CreateCustomerThreadOutput> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai-chat/threads/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ChatThreads
     * @throws ApiError
     */
    public static aiChatThreadsRetrieve({
        threadId,
    }: {
        threadId: string,
    }): CancelablePromise<ChatThreads> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai-chat/threads/{thread_id}/',
            path: {
                'thread_id': threadId,
            },
        });
    }

    /**
     * update existing customer thread
     * @returns UpdateCustomerThreadOutput
     * @throws ApiError
     */
    public static updateCustomerThread({
        threadId,
        requestBody,
    }: {
        threadId: string,
        requestBody: OmitReadonly<UpdateCustomerThreadInput>,
    }): CancelablePromise<UpdateCustomerThreadOutput> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ai-chat/threads/{thread_id}/',
            path: {
                'thread_id': threadId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static aiChatThreadsDestroy({
        threadId,
    }: {
        threadId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ai-chat/threads/{thread_id}/',
            path: {
                'thread_id': threadId,
            },
        });
    }

    /**
     * Get all messages for a thread
     * @returns ThreadMessages
     * @throws ApiError
     */
    public static getMessagesForThread({
        threadId,
    }: {
        threadId: string,
    }): CancelablePromise<ThreadMessages> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai-chat/threads/{thread_id}/messages/',
            path: {
                'thread_id': threadId,
            },
        });
    }

    /**
     * update customer thread name
     * @returns void
     * @throws ApiError
     */
    public static updateCustomerThreadName({
        threadId,
        requestBody,
    }: {
        threadId: string,
        requestBody: OmitReadonly<UpdateThreadName>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ai-chat/threads/{thread_id}/update_thread_name/',
            path: {
                'thread_id': threadId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
