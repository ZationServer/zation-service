/*
Author: Luca Scaringella
GitHub: LucaCode
©Copyright by Luca Scaringella
 */

export type ServiceCreateFunction<Instance,Config> = (config: Config, instanceName: string) => Promise<Instance> | Instance;
export type ServiceGetFunction<Instance,Get> = (instance: Instance) => Promise<Get> | Get;

export interface Service<Config,Instance,Get = Instance> {
    /**
     * A function that creates a service instance with a specific config and returns it.
     * @example
     * create: async (config, instanceName) => {
     *     return await createService(config);
     * }
     */
    create: ServiceCreateFunction<Instance,Config>;
    /**
     * A function that will be used to access the service from the bag.
     * A use case for this function could be to return one connection from a pool.
     * If this property is not defined, the complete service instance will be returned.
     * @example
     * get: async (instance) => {
     *     return await instance.getConnection();
     * }
     */
    get?: ServiceGetFunction<Instance,Get>
    /**
     * The configuration of all instances that should be created.
     * The key represents the instance name and the
     * value represents the instance configuration.
     * The instance with the key: default can be accessed from
     * the bag without having to specify the instance name.
     * @example
     * instances: {
     *     default: {
     *         port: 3306,
     *         user: process.env.MAIN_DB_USER,
     *         password: process.env.MAIN_DB_PASSWORD
     *     },
     *     profileDb: {
     *         port: 3306,
     *         user: process.env.PROFILE_DB_USER,
     *         password: process.env.PROFILE_DB_PASSWORD
     *     }
     * }
     */
    instances?: DefaultInstance<Config> | Record<string,Config>;
}

export interface DefaultInstance<T> {
    /**
     * The default instance configuration of this service.
     * You can access the default instance of a service
     * from the bag without having to specify the instance name.
     */
    default ?: T;
}