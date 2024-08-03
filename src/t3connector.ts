/**
 * T3-Headless T3Connector Class
 */
export default class T3Connector{
    /** @var {string} host*/
    private host : string = "";
    /** @var {string} path */
    private path : string = "";
    /** @var {string} uri */
    private uri: string = "";
    /** @var {RequestInit | Object} options */
    private options: RequestInit | Object = {};

    /**
     * constructor
     * @param {string} url - api url
     * @param {RequestInit} option - fetch options
     */
    constructor(url : string, option?: RequestInit){
        this.host = url.replace(/\/?$/, '/');;
        this.options = option || {};
    }

    /**
     * cached
     * to force cache
     * @returns {T3Connector}
     */
    public cached() : T3Connector{
        this.options = {
            ...this.options,
            cache: 'force-cache'
        };
        return this;
    }

    /**
     * query
     * to set path, uri, and options
     * @param {string} params.path - path
     * @param {string} params.uri - uri
     * @param {RequestInit} params.options - options
     * @returns {T3Connector}
     */
    public query(
        { path, uri, options } : { path?: string, uri?: string, options?: RequestInit } = {}
    ): T3Connector{
        this.path = path || "";
        this.uri = uri || "";
        this.options = options || {};
        return this;
    }

    /**
     * method
     * to set method
     * @param {string} method - method GET | POST | PUT | DELETE
     * @returns {T3Connector}
     */
    public method(method: string) : T3Connector{
        this.options = {
            ...this.options,
            method: method
        };
        return this;
    }

    /**
     * data
     * to set data as JSON in body
     * @param {Object} data - data
     * @returns {T3Connector}
     */
    public data(data: Object) : T3Connector{
        this.options = {
            ...this.options,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return this;
    }

    /**
     * requestParser
     * to get url and options
     * @returns {Object} { url: string, options: RequestInit }
     */
    public requestParser() : {
        url: string;
        options: RequestInit;
    }{
        return {
            url: `${this.host}${this.path}${this.uri}`,
            options: this.options
        };
    }


    /**
     * fetch
     * to fetch data
     * @returns {Promise<T>}
     */
    public fetch<T>() : Promise<T>{
        return new Promise<T>((resolve, reject) => {

            const url = `${this.host}${this.path}${this.uri}`;

            fetch(
                url,
                this.options
            )
            .then((response) => {
                if( response.ok ) return response.json();
                reject({
                    fetchError: {
                        status: response.status,
                        statusText: response.statusText,
                        url
                    }
                });
            })
            .then((data) => resolve(data))
            .catch((error) => {reject(error)});

        });
    }

}