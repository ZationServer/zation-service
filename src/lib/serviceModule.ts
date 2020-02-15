/*
Author: Luca Scaringella
GitHub: LucaCode
©Copyright by Luca Scaringella
 */

export interface ServiceModule<Config,Created,Get> {
    /**
     * The Service Module.
     * The keys are the name of the exported services.
     * For example 'MySQL','NodeMailer','MongoDB'.
     * The value is the service configuration.
     * If you want to register bag extensions for a service,
     * you should look at the 'zation-bag-extension' package.
     * You also can check out the already created
     * service modules: 'zation-service-nodemailer' or 'zation-service-mysql'.
     */
    [serviceName: string] : Service<Config,Config,Get>;
}

export type CustomServiceCreateFunction<T,C> = (config : C,name : string) => Promise<T> | T;
export type CustomServiceGetFunction<T,R> = (service : T) => Promise<R> | R;

export interface Service<Config,Created,Get> {
    create: CustomServiceCreateFunction<Created,Config>;
    get?: CustomServiceGetFunction<Created,Get>
    instances: DefaultInstance<Config> | Record<string,Config>;
}

export interface DefaultInstance<T> {
    default ?: T;
}

