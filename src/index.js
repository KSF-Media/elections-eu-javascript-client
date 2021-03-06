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


import ApiClient from './ApiClient';
import Area from './model/Area';
import AreaInfo from './model/AreaInfo';
import AreaResponse from './model/AreaResponse';
import AreaType from './model/AreaType';
import AreasResponse from './model/AreasResponse';
import Candidate from './model/Candidate';
import CandidateMembership from './model/CandidateMembership';
import Gender from './model/Gender';
import I18N from './model/I18N';
import Language from './model/Language';
import LanguageRation from './model/LanguageRation';
import MunicipalityType from './model/MunicipalityType';
import Nominator from './model/Nominator';
import Status from './model/Status';
import Votes from './model/Votes';
import DefaultApi from './api/DefaultApi';


/**
* KSF_Medias_election_service.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ElectionsEu = require('index'); // See note below*.
* var xxxSvc = new ElectionsEu.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ElectionsEu.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ElectionsEu.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ElectionsEu.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Area model constructor.
     * @property {module:model/Area}
     */
    Area,

    /**
     * The AreaInfo model constructor.
     * @property {module:model/AreaInfo}
     */
    AreaInfo,

    /**
     * The AreaResponse model constructor.
     * @property {module:model/AreaResponse}
     */
    AreaResponse,

    /**
     * The AreaType model constructor.
     * @property {module:model/AreaType}
     */
    AreaType,

    /**
     * The AreasResponse model constructor.
     * @property {module:model/AreasResponse}
     */
    AreasResponse,

    /**
     * The Candidate model constructor.
     * @property {module:model/Candidate}
     */
    Candidate,

    /**
     * The CandidateMembership model constructor.
     * @property {module:model/CandidateMembership}
     */
    CandidateMembership,

    /**
     * The Gender model constructor.
     * @property {module:model/Gender}
     */
    Gender,

    /**
     * The I18N model constructor.
     * @property {module:model/I18N}
     */
    I18N,

    /**
     * The Language model constructor.
     * @property {module:model/Language}
     */
    Language,

    /**
     * The LanguageRation model constructor.
     * @property {module:model/LanguageRation}
     */
    LanguageRation,

    /**
     * The MunicipalityType model constructor.
     * @property {module:model/MunicipalityType}
     */
    MunicipalityType,

    /**
     * The Nominator model constructor.
     * @property {module:model/Nominator}
     */
    Nominator,

    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status,

    /**
     * The Votes model constructor.
     * @property {module:model/Votes}
     */
    Votes,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
