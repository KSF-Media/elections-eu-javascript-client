/**
 * Election
 * KSF Media's election service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The I18N model module.
 * @module model/I18N
 * @version 1.0.0
 */
class I18N {
    /**
     * Constructs a new <code>I18N</code>.
     * @alias module:model/I18N
     * @param finnish {String} 
     */
    constructor(finnish) { 
        
        I18N.initialize(this, finnish);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, finnish) { 
        obj['finnish'] = finnish;
    }

    /**
     * Constructs a <code>I18N</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/I18N} obj Optional instance to populate.
     * @return {module:model/I18N} The populated <code>I18N</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new I18N();

            if (data.hasOwnProperty('swedish')) {
                obj['swedish'] = ApiClient.convertToType(data['swedish'], 'String');
            }
            if (data.hasOwnProperty('english')) {
                obj['english'] = ApiClient.convertToType(data['english'], 'String');
            }
            if (data.hasOwnProperty('finnish')) {
                obj['finnish'] = ApiClient.convertToType(data['finnish'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} swedish
 */
I18N.prototype['swedish'] = undefined;

/**
 * @member {String} english
 */
I18N.prototype['english'] = undefined;

/**
 * @member {String} finnish
 */
I18N.prototype['finnish'] = undefined;






export default I18N;

