/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkGen } from '../models/BulkGen';
import type { BulkGenData } from '../models/BulkGenData';
import type { BulkGenUpload } from '../models/BulkGenUpload';
import type { PaginatedBulkGenList } from '../models/PaginatedBulkGenList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GenerateBulkService {

    /**
     * List bulk generation tasks
     * @returns PaginatedBulkGenList
     * @throws ApiError
     */
    public static listBulkGenerationTasks({
        templateId,
        ordering,
        page,
    }: {
        templateId: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A page number within the paginated result set.
         */
        page?: number,
    }): CancelablePromise<PaginatedBulkGenList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/generate/bulk/',
            path: {
                'template_id': templateId,
            },
            query: {
                'ordering': ordering,
                'page': page,
            },
        });
    }

    /**
     * Get bulk generation task
     * @returns BulkGen
     * @throws ApiError
     */
    public static getBulkGenerationTask({
        id,
        templateId,
    }: {
        /**
         * Task id
         */
        id: number,
        /**
         * Template id
         */
        templateId: number,
    }): CancelablePromise<BulkGen> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/generate/bulk/{id}/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * Cancel a bulk generation task
     * @returns BulkGen
     * @throws ApiError
     */
    public static cancelBulkGenerationTask({
        id,
        templateId,
        requestBody,
    }: {
        /**
         * Task id
         */
        id: number,
        /**
         * Template id
         */
        templateId: number,
        requestBody?: BulkGen,
    }): CancelablePromise<BulkGen> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/templates/{template_id}/generate/bulk/{id}/cancel/',
            path: {
                'id': id,
                'template_id': templateId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a task saved as draft
     * @returns BulkGenData
     * @throws ApiError
     */
    public static getBulkGenerationDraft({
        id,
        templateId,
    }: {
        /**
         * Task id
         */
        id: number,
        /**
         * Template id
         */
        templateId: number,
    }): CancelablePromise<BulkGenData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/generate/bulk/{id}/draft/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * Trigger a bulk generation task
     * @returns BulkGen
     * @throws ApiError
     */
    public static triggerBulkGenerationDraft({
        id,
        templateId,
        requestBody,
    }: {
        /**
         * Task id
         */
        id: number,
        /**
         * Template id
         */
        templateId: number,
        requestBody?: BulkGen,
    }): CancelablePromise<BulkGen> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/templates/{template_id}/generate/bulk/{id}/trigger/',
            path: {
                'id': id,
                'template_id': templateId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Upload a new csv for bulk generate.
     * This will create a task in DRAFT mode.
     * @returns BulkGenData
     * @throws ApiError
     */
    public static uploadForBulkGeneration({
        templateId,
        formData,
    }: {
        /**
         * Template id
         */
        templateId: number,
        formData: BulkGenUpload,
    }): CancelablePromise<BulkGenData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{template_id}/generate/bulk/upload/',
            path: {
                'template_id': templateId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
