import t3Connector from "./.";

type SiteSettingsNavigation = {
    title: string;
    link: string;
    target: string;
    active: number;
    current: number;
    spacer: number;
    hasSubpages: number;
    children? : SiteSettingsNavigation[];
};


type SiteSettings = {
    navigation: SiteSettingsNavigation[];
    i18n: {
        languageId: number;
        locale: string;
        title: string;
        navigationTitle: string;
        twoLetterIsoCode: string;
        hreflang: string;
        direction: string;
        flag: string;
        link: string;
        active: number;
        current: number;
        available: number;
    }[];
};

const connector = new t3Connector(`https://headless-typo3.typo3.su14iman.local`);

connector.query()
.get()
.uri("?type=834")
.fetch<SiteSettings>()
.then((res) => {
    console.log(
        res.navigation[0].title
    )
});
