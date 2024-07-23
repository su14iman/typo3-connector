import t3Connector from "./.";

const connector = new t3Connector(`https://headless-typo3.typo3.su14iman.local`);

connector.query()
.get()
.path('news')
.cached()
.fetch()
.then((res) => {
    console.log(res['id']);
});