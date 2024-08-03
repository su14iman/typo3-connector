import T3Connector from "../src";

const url = 'https://headless-typo3.typo3.su14iman.local';
const connector = new T3Connector(url);


// ----------------- Test 1 -----------------
// Test Scope and URL for GET request
const requestToCheckScope = connector
.query({
    path: 'about-us/localtion',
})
.method("GET")
.requestParser();

test("Check URL and Scope", () => {
    expect(requestToCheckScope.url).toBe(
        `${url}/about-us/localtion`
    );
    expect(requestToCheckScope.options?.method).toBe('GET');
});


// ----------------- Test 2 -----------------
// Test URL and URI for GET request
const requestToCheckUri = connector
.query({
    uri: '?type=834',
})
.method("GET")
.requestParser();

test("Check URL and URI", () => {
    expect(requestToCheckUri.url).toBe(
        `${url}/?type=834`
    );
    expect(requestToCheckUri.options?.method).toBe('GET');
});


// ----------------- Test 3 -----------------
// Test POST request
const requestToCheckPost = connector
.query({
    path: 'about-us/localtion/contacts',
})
.method("POST")
.data({name: 'John Doe'})
.requestParser();

test("Check POST request", () => {
    expect(requestToCheckPost.url).toBe(
        `${url}/about-us/localtion/contacts`
    );
    expect(requestToCheckPost.options?.method).toBe('POST');
    expect(requestToCheckPost.options?.body).toBe('{"name":"John Doe"}');
    if(requestToCheckPost.options?.headers !== undefined){
        expect(requestToCheckPost.options?.headers['Content-Type']).toBe('application/json');
    }
});