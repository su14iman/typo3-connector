# typo3-connector
The T3Connector class is designed to facilitate making HTTP requests to an API. It encapsulates the functionality needed to build and execute these requests in a fluent and flexible manner.

# Requirements
- TYPO3 v11 >=
- [friendsoftypo3/headless](https://extensions.typo3.org/extension/headless)

## How to use:
```typescript
import T3Connector from "@su14iman/typo3-connector";

const connector = new T3Connector(`https://headless-typo3.typo3.su14iman.local`);

connector.query({
    path: "/"
})
.method("GET")
.cached()
.fetch<T3ContentElements[]>()
.then((res) => {
    console.log(res['id']);
});
```

## Functions

#### - `query({ path, uri, options } : { path?: string, uri?: string, options?: RequestInit })`
>to start new query and clear old path and old uri <br/>
 - @return **T3Connector**




#### - `cached()`
>to set cache in fetch options <br/>
- @return **T3Connector**

#### - `method(method: string)`
> to set method - GET | POST | PUT | DELETE
- @return **T3Connector**

#### - `data(data: Object)`
>to set data in fetch options <br/>
- @param  **Object** data
- @return **T3Connector**


#### - `requestParser()`
>to parse request, **but you do not need to add it to the query, it was added to be used with tests**
- @return **T3Connector**

#### - `fetch<T>(options?: RequestInit)`
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
