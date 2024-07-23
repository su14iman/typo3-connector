# typo3-connector
The T3Connector class is designed to facilitate making HTTP requests to an API. It encapsulates the functionality needed to build and execute these requests in a fluent and flexible manner. 

## How to use: 
```typescript
import t3Connector from "@su14iman/typo3-connector";

const connector = new t3Connector(`https://headless-typo3.typo3.su14iman.local`);

connector.query()
.get()
.path('news')
.cached()
.fetch()
.then((res) => {
    console.log(res['id']);
});
```

## Functions

#### - `query()`
>to start new query and clear old path and old uri <br/>
 - @return **T3Connector**

#### - `options(options: RequestInit)`
>to set fetch options <br/>
- @param  **RequestInit** options
- @return **T3Connector**

#### - `get()`
>to set GET method in fetch options <br/>
- @return **T3Connector**

#### - `post()`
>to set POST method in fetch options <br/>
- @return **T3Connector**

#### - `cached()`
>to set cache in fetch options <br/>
- @return **T3Connector**

#### - `data(data: Object)`
>to set data in fetch options <br/>
- @param  **Object** data
- @return **T3Connector**

#### - `path(path: string)`
>to set path <br/>
- @param  **string** path
- @return **T3Connector**

#### - `uri(uri: string)`
>to set uri variables <br/>
- @param  **string** uri
- @return **T3Connector**

#### - `requestBuilder()`
>to build request, **but you do not need to add it to the query, it was added to be used with tests**
- @return **T3Connector**

#### - `fetch()`
>to fetch data from API
- @return **T3Connector**





## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request


## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
