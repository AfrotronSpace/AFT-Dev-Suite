import { Twitter } from "next/dist/lib/metadata/types/twitter-types"

const customURL: URL = new URL("localhost:3000");
const twitterSiteID = 'AFT-001';
const twitterCreator = 'BIG-TRINITEE';
const twitterCreatorID = 'Afrotronian';

const TwitterGlobalMetadata: Twitter = {
    site: customURL.toString(),
    siteId: twitterSiteID,
    creator: twitterCreator,
    creatorId: twitterCreatorID,
    description: "Afrotron App Template nextJS -- Typescript",
    title: "Afrotron App",
    images: "path/to/image",
}

export const TwitterSummaryMetadata: Twitter = {
    ...TwitterGlobalMetadata,
    card: 'summary',
}

export const TwitterSummaryLargeImageMetadata: Twitter = {
    ...TwitterGlobalMetadata,
    card: 'summary_large_image',
}

export const TwitterPlayerMetadata: Twitter = {
    ...TwitterGlobalMetadata,
    card: 'player',
    players: {
        playerUrl: customURL,
        streamUrl: customURL,
        width: 1024,
        height: 1024,
    }
}

export const TwitterAppMetadata: Twitter = {
    ...TwitterGlobalMetadata,
    card: 'app',
    app: {
        id: {
            iphone: "AFT-001",
            ipad: "AFT-001",
            googleplay: "AFT-001",
        },
        url: {
            iphone: customURL,
            ipad: customURL,
            googleplay: customURL,
        },
        name: "AFT-001",
    }
}
