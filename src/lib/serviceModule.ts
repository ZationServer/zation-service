/*
Author: Luca Scaringella
GitHub: LucaCode
©Copyright by Luca Scaringella
 */

export type CustomServiceCreateFunction<T,C> = (config : C,name : string) => Promise<T> | T;
export type CustomServiceGetFunction<T,R> = (service : T) => Promise<R> | R;

export interface ServiceModule<Config,Created,Get> {
   serviceName : string,
   service : CustomService<Config,Created,Get> | Record<string,Config> | DefaultConfig<Config>;
   bagExtensions : {
       smallBag : Record<string,Function>;
       bag : Record<string,Function>;
   }
}

export interface CustomService<Config,Created,Get> {
    create : CustomServiceCreateFunction<Created,Config>;
    get ?: CustomServiceGetFunction<Created,Get>
}

export interface DefaultConfig<T> {
    default ?: T;
}

