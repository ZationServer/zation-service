/*
Author: Ing. Luca Gian Scaringella
GitHub: LucaCode
Copyright(c) Ing. Luca Gian Scaringella
 */

import {Service} from "./service";

export interface ServicePackage<Config,Instance,Get = Instance> {
    /**
     * The Service Package.
     * The keys are the name of the exported services.
     * For example 'MySQL','NodeMailer','MongoDB'.
     * The value is the service configuration.
     * If you want to register bag extensions for a service,
     * you should look at the 'zation-bag-extension' package.
     * You also can check out the already created
     * service packages for example: 'zation-service-nodemailer' or 'zation-service-mysql'.
     */
    [serviceName: string] : Service<Config,Instance,Get>;
}
