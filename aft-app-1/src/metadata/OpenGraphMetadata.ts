import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
const customURL: URL = new URL("localhost:3000");
const customDate = "1/10/2025";
const customAuthors = ["BIG-TRINITEE", ];
const customTags = ["BIG-TRINITEE", "AFT", "AFT-DEVS", "REACT", "NEXTJS", "APP"];

const OGMetadata: OpenGraph = {
    determiner: '',
    title: "AFT APP",
    description: "Afrotron App Template nextJS -- Typescript",
    emails: ["support@aft.com", ],
    phoneNumbers: ["+2348123456789", ],
    faxNumbers: ["+9988 1122 3344", ],
    siteName: "Afrotron Suite",
    locale: "NG",
    alternateLocale: ["GH", "UK", "DE", ],
    images: "path/to/image",
    audio: "path/to/audio",
    videos: "path/to/video",
    url: customURL,
    countryName: "Nigeria",
    ttl: 1500,
}

export const OGWebsite: OpenGraph = {
    ...OGMetadata,
    type: "website",
}

export const OGArticle: OpenGraph = {
    ...OGMetadata,
    type: 'article',
    publishedTime: customDate,
    modifiedTime: customDate,
    expirationTime: customDate,
    authors: customAuthors,
    section: "",
    tags: customTags,
}

export const OGBook: OpenGraph = {
    ...OGMetadata,
    type: 'book',
    isbn: '',
    releaseDate: customDate,
    authors: customAuthors,
    tags: customTags
}

export const OGProfile: OpenGraph = {
    ...OGMetadata,
    type: 'profile',
    firstName: "Victor",
    lastName: "Okoye",
    username: "bigTrinitee",
    gender: "Male",
}
export const OGMusicSong: OpenGraph = {
    ...OGMetadata,
    type: 'music.song',
    duration: 120,
    albums: "path/to/album",
    musicians: [],
}
export const OGMusicAlbum: OpenGraph = {
    ...OGMetadata,
    type: 'music.album',
    songs: [],
    musicians: [],
    releaseDate: customDate,
}
export const OGMusicPlaylist: OpenGraph = {
    ...OGMetadata,
    type: 'music.playlist',
    songs: [],
    creators: [],
}
export const OGRadioStation: OpenGraph = {
    ...OGMetadata,
    type: 'music.radio_station',
    creators: [],
}
export const OGVideoMovie: OpenGraph = {
    ...OGMetadata,
    type: 'video.movie',
    actors: [],
    directors: [],
    writers: [],
    duration: 120,
    releaseDate: customDate,
    tags: [],
}
export const OGVideoEpisode: OpenGraph = {
    ...OGMetadata,
    type: 'video.episode',
    actors: [],
    directors: [],
    writers: [],
    duration: 120,
    releaseDate: customDate,
    tags: [],
    series: "",
}
export const OGVideoTVShow: OpenGraph = {
    ...OGMetadata,
    type: 'video.tv_show',
}
export const OGVideoOther: OpenGraph = {
    ...OGMetadata,
    type: 'video.other',
}