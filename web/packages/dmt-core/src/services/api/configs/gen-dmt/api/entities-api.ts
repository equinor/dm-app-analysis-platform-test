/* tslint:disable */
/* eslint-disable */
/**
 * Data Modelling Tool
 * API for Data Modeling Tool (DMT)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from '../base'
// @ts-ignore
import { BasicEntity } from '../models'
// @ts-ignore
import { ErrorResponse } from '../models'
/**
 * EntitiesApi - axios parameter creator
 * @export
 */
export const EntitiesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Instantiate
     * @param {BasicEntity} basicEntity
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    instantiateEntity: async (
      basicEntity: BasicEntity,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'basicEntity' is not null or undefined
      assertParamExists('instantiateEntity', 'basicEntity', basicEntity)
      const localVarPath = `/api/v1/entity`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        basicEntity,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * EntitiesApi - functional programming interface
 * @export
 */
export const EntitiesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = EntitiesApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary Instantiate
     * @param {BasicEntity} basicEntity
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async instantiateEntity(
      basicEntity: BasicEntity,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.instantiateEntity(
        basicEntity,
        options
      )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
  }
}

/**
 * EntitiesApi - factory interface
 * @export
 */
export const EntitiesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = EntitiesApiFp(configuration)
  return {
    /**
     *
     * @summary Instantiate
     * @param {BasicEntity} basicEntity
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    instantiateEntity(
      basicEntity: BasicEntity,
      options?: any
    ): AxiosPromise<any> {
      return localVarFp
        .instantiateEntity(basicEntity, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for instantiateEntity operation in EntitiesApi.
 * @export
 * @interface EntitiesApiInstantiateEntityRequest
 */
export interface EntitiesApiInstantiateEntityRequest {
  /**
   *
   * @type {BasicEntity}
   * @memberof EntitiesApiInstantiateEntity
   */
  readonly basicEntity: BasicEntity
}

/**
 * EntitiesApi - object-oriented interface
 * @export
 * @class EntitiesApi
 * @extends {BaseAPI}
 */
export class EntitiesApi extends BaseAPI {
  /**
   *
   * @summary Instantiate
   * @param {EntitiesApiInstantiateEntityRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EntitiesApi
   */
  public instantiateEntity(
    requestParameters: EntitiesApiInstantiateEntityRequest,
    options?: any
  ) {
    return EntitiesApiFp(this.configuration)
      .instantiateEntity(requestParameters.basicEntity, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
