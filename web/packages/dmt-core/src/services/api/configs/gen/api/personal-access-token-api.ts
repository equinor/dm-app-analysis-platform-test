/* tslint:disable */
/* eslint-disable */
/**
 * Data Modelling Storage Service
 * API for basic data modelling interaction
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AccessLevel } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { PATData } from '../models';
/**
 * PersonalAccessTokenApi - axios parameter creator
 * @export
 */
export const PersonalAccessTokenApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary New Personal Access Token
         * @param {AccessLevel} [scope] 
         * @param {number} [timeToLive] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenCreate: async (scope?: AccessLevel, timeToLive?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2AuthorizationCodeBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthorizationCodeBearer", [], configuration)

            if (scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }

            if (timeToLive !== undefined) {
                localVarQueryParameter['time_to_live'] = timeToLive;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Revoke Personal Access Token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenDelete: async (tokenId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('tokenDelete', 'tokenId', tokenId)
            const localVarPath = `/api/v1/token/{token_id}`
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2AuthorizationCodeBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthorizationCodeBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List All Pats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenListAll: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2AuthorizationCodeBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthorizationCodeBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PersonalAccessTokenApi - functional programming interface
 * @export
 */
export const PersonalAccessTokenApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PersonalAccessTokenApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary New Personal Access Token
         * @param {AccessLevel} [scope] 
         * @param {number} [timeToLive] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenCreate(scope?: AccessLevel, timeToLive?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tokenCreate(scope, timeToLive, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Revoke Personal Access Token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenDelete(tokenId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tokenDelete(tokenId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List All Pats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenListAll(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PATData>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tokenListAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PersonalAccessTokenApi - factory interface
 * @export
 */
export const PersonalAccessTokenApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PersonalAccessTokenApiFp(configuration)
    return {
        /**
         * 
         * @summary New Personal Access Token
         * @param {AccessLevel} [scope] 
         * @param {number} [timeToLive] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenCreate(scope?: AccessLevel, timeToLive?: number, options?: any): AxiosPromise<string> {
            return localVarFp.tokenCreate(scope, timeToLive, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Revoke Personal Access Token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenDelete(tokenId: string, options?: any): AxiosPromise<string> {
            return localVarFp.tokenDelete(tokenId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List All Pats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenListAll(options?: any): AxiosPromise<Array<PATData>> {
            return localVarFp.tokenListAll(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for tokenCreate operation in PersonalAccessTokenApi.
 * @export
 * @interface PersonalAccessTokenApiTokenCreateRequest
 */
export interface PersonalAccessTokenApiTokenCreateRequest {
    /**
     * 
     * @type {AccessLevel}
     * @memberof PersonalAccessTokenApiTokenCreate
     */
    readonly scope?: AccessLevel

    /**
     * 
     * @type {number}
     * @memberof PersonalAccessTokenApiTokenCreate
     */
    readonly timeToLive?: number
}

/**
 * Request parameters for tokenDelete operation in PersonalAccessTokenApi.
 * @export
 * @interface PersonalAccessTokenApiTokenDeleteRequest
 */
export interface PersonalAccessTokenApiTokenDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof PersonalAccessTokenApiTokenDelete
     */
    readonly tokenId: string
}

/**
 * PersonalAccessTokenApi - object-oriented interface
 * @export
 * @class PersonalAccessTokenApi
 * @extends {BaseAPI}
 */
export class PersonalAccessTokenApi extends BaseAPI {
    /**
     * 
     * @summary New Personal Access Token
     * @param {PersonalAccessTokenApiTokenCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonalAccessTokenApi
     */
    public tokenCreate(requestParameters: PersonalAccessTokenApiTokenCreateRequest = {}, options?: any) {
        return PersonalAccessTokenApiFp(this.configuration).tokenCreate(requestParameters.scope, requestParameters.timeToLive, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Revoke Personal Access Token
     * @param {PersonalAccessTokenApiTokenDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonalAccessTokenApi
     */
    public tokenDelete(requestParameters: PersonalAccessTokenApiTokenDeleteRequest, options?: any) {
        return PersonalAccessTokenApiFp(this.configuration).tokenDelete(requestParameters.tokenId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List All Pats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonalAccessTokenApi
     */
    public tokenListAll(options?: any) {
        return PersonalAccessTokenApiFp(this.configuration).tokenListAll(options).then((request) => request(this.axios, this.basePath));
    }
}
