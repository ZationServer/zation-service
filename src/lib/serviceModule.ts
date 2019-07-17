/*
Author: Luca Scaringella
GitHub: LucaCode
©Copyright by Luca Scaringella
 */

export type CustomServiceCreateFunction<T,C> = (config : C,name : string) => Promise<T> | T;
export type CustomServiceGetFunction<T,R> = (service : T) => Promise<R> | R;

export interface ServiceModule<Config,Created,Get,BagEx = Record<string,any>,RequestBagEx = Record<string,any>> {
    /**
     * The name of the service.
     * @example 'MySQL','NodeMailer','MongoDB'
     */
   serviceName : string,
    /**
     * The configuration of the service same as the service property of the service configuration from the zation server.
     */
   service : CustomService<Config,Created,Get> | Record<string,Config> | DefaultConfig<Config>;
    /**
     * The bag extensions, same as one bag extension of the app configuration from the zation server.
     */
   bagExtensions : {
       bag ?: BagEx;
       requestBag ?: RequestBagEx;
   }
}

export interface CustomService<Config,Created,Get> {
    create : CustomServiceCreateFunction<Created,Config>;
    get ?: CustomServiceGetFunction<Created,Get>
}

export interface DefaultConfig<T> {
    default ?: T;
}

