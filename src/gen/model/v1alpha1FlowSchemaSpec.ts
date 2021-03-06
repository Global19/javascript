/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1alpha1FlowDistinguisherMethod } from './v1alpha1FlowDistinguisherMethod';
import { V1alpha1PolicyRulesWithSubjects } from './v1alpha1PolicyRulesWithSubjects';
import { V1alpha1PriorityLevelConfigurationReference } from './v1alpha1PriorityLevelConfigurationReference';

/**
* FlowSchemaSpec describes how the FlowSchema\'s specification looks like.
*/
export class V1alpha1FlowSchemaSpec {
    'distinguisherMethod'?: V1alpha1FlowDistinguisherMethod;
    /**
    * `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
    */
    'matchingPrecedence'?: number;
    'priorityLevelConfiguration': V1alpha1PriorityLevelConfigurationReference;
    /**
    * `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
    */
    'rules'?: Array<V1alpha1PolicyRulesWithSubjects>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "distinguisherMethod",
            "baseName": "distinguisherMethod",
            "type": "V1alpha1FlowDistinguisherMethod"
        },
        {
            "name": "matchingPrecedence",
            "baseName": "matchingPrecedence",
            "type": "number"
        },
        {
            "name": "priorityLevelConfiguration",
            "baseName": "priorityLevelConfiguration",
            "type": "V1alpha1PriorityLevelConfigurationReference"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<V1alpha1PolicyRulesWithSubjects>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1FlowSchemaSpec.attributeTypeMap;
    }
}

