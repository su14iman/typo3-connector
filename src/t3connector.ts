/**
 * T3-Headless T3Connector Class
 */
export default class T3Connector
{

    /** 
     * @var { string } apiURL - API URL
     */
    protected _host : string = '';

    /** 
     * @var { string } scope - Scope
     */
    protected _path : string = '';

    /** 
     * @var { string } uri - URI
     */
    protected _uri : string = '';

    /** 
     * @var { RequestInit | Object } options - Fetch options
     */
    private _options: RequestInit | Object = {};

    /**
     * Constructor
     * @param { string } host - API URL
     * @param { RequestInit | null } options - Fetch options
     */
    constructor( host: string, options?: RequestInit ){
        this._host = host.replace(/\/?$/, '/');
        this._options = options || {};
    }

    /**
     * query function
     * to start new query and clear old path and old uri
     * @return { T3Connector }
     */
    public query() : T3Connector
    {
        this._path = '';
        this._uri = '';
        return this;
    }

    /**
     * options function
     * to set fetch options
     * @param { RequestInit } options
     * @return { T3Connector }
     */
    public options(options: RequestInit) : T3Connector
    {
        this._options = {
            ...this._options,
            ...options
        }
        return this;
    }

    /**
     * get function
     * to set GET method in fetch options
     * @return { void }
     */
    public get() : T3Connector
    {
        this.options({
            method: 'GET',
            body: null
        })
        return this;
    }

    /**
     * post function
     * to set POST method in fetch options
     * @return { void }
     */
    public post() : T3Connector
    {
        this.options ({
            method: 'POST'
        })
        return this;
    }

    /**
     * cached function
     * to set cache in fetch options
     * @return { T3Connector }
     */
    public cached() : T3Connector
    {
        this.options({
            cache: 'force-cache'
        })
        return this;
    }

    /**
     * data function
     * to set data in fetch options
     * @param { Object } data
     * @return { T3Connector }
     */
    public data(data: Object) : T3Connector
    {
        this.options ({
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return this;
    }

    /**
     * path function
     * to set path
     * @param { string } path
     * @return { T3Connector }
     */
    public path(path: string) : T3Connector
    {
        this._path = path.replace(/\/?$/, '/');
        return this;
    }

    /**
     * uri function
     * to set uri variables
     * @param { string } uri
     * @return { T3Connector }
     */
    public uri(uri: string) : T3Connector
    {
        this._uri = uri;
        return this;
    }

    /**
     * request builder
     * to build request
     * @return { { url: string, options: RequestInit | null } }
     */
    public requestBuilder() : { url: string, options: RequestInit | null }
    {
        return {
            url: `${this._host}${this._path}${this._uri}`,
            options: this._options
        };
    }

    /**
     * fetch function
     * to fetch data from API
     * @return { Promise<T> }
     */
    public async fetch<T>() : Promise<T>
    {
        return new Promise<T>((resolve, reject) => {
            let { url, options } = this.requestBuilder();
            fetch( url, options )
            .then((response) => {
                if( response.ok ) return response.json();
                reject(response.statusText);
            })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

}