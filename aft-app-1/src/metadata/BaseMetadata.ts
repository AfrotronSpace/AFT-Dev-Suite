import type { Metadata } from "next";
import { OGWebsite } from "./OpenGraphMetadata";
import { TwitterSummaryMetadata } from "./TwitterMetadata";

const customURL: URL = new URL("localhost:3000");
const appName: string = "AFT App";
const appID: string = "AFT-1024";
const appPackageName: string = "com.aft";

export const VariableMetadata: Metadata = {
    abstract: "Afrotron App Template nextJS -- Typescript",
    applicationName: "Afrotron App Template.",
    authors: [
        { name: "Okoye Victor", url: customURL },
        { name: "AFT-DEVS", url: customURL },
    ],
    alternates: {
        canonical: customURL,
        languages: {
            "en": customURL,
        }
    },
    appLinks: {
        // ANDRIOD
        android: { url: customURL, package: appPackageName, app_name: appName, class: "TECH" },
        // IOS
        ios: { url: customURL, app_store_id: appID, app_name: appName },
        ipad: { url: customURL, app_store_id: appID, app_name: appName },
        iphone: { url: customURL, app_store_id: appID, app_name: appName },
        // WINDOWS
        windows_phone: { url: customURL, app_id: appID, app_name: appName },
        windows: { url: customURL, app_id: appID, app_name: appName },
        windows_universal: { url: customURL, app_id: appID, app_name: appName },
        // WEB
        web: { url: customURL, should_fallback: true }
    },
    appleWebApp: {
        capable: true,
        title: appName,
        startupImage: "link/to/apple/image.png",
        statusBarStyle: "black-translucent",
    },
    archives: customURL.toString(),
    assets: customURL.toString(),
    bookmarks: customURL.toString(),
    category: "TECH",
    classification: "TECH",
    creator: "BIG-TRINITEE",
    description: "Afrotron App Template nextJS -- Typescript",
    facebook: {
        appId: appID,
        //    admins: ["BIG-TRINITEE", ]
    },
    formatDetection: {
        address: true,
        date: true,
        email: true,
        telephone: true,
        url: true
    },
    generator: "AFT-NextJS",
    icons: customURL,
    itunes: { appId: appID, appArgument: "aft" },
    keywords: ["BIG-TRINITEE", "AFT", "AFT-DEVS", "REACT", "NEXTJS", "APP"],
    manifest: customURL,
    metadataBase: customURL,
    openGraph: OGWebsite,
    other: {},
    pagination: {},
    pinterest: { richPin: true },
    publisher: "BIG-TRINITEE",
    referrer: "strict-origin",
    robots: { "follow": true, index: true },
    title: {
        default: "Afrotron App",
        template: "Afrotron App",
        absolute: "Afrotron App | Home"
    },
    twitter: TwitterSummaryMetadata,
    verification: {
        google: "verification-id",
        yahoo: "verification-id",
        yandex: "verification-id",
        me: "verification-id",
        other: {}
    },
}

export const BaseMetadata: Metadata = {
    title: VariableMetadata.title,
    description: VariableMetadata.description,
    keywords: VariableMetadata.keywords,
    category: VariableMetadata.category,
    facebook: VariableMetadata.facebook,
    robots: VariableMetadata.robots,
    twitter: VariableMetadata.twitter,
    // abstract: VariableMetadata.abstract,
    // applicationName: VariableMetadata.applicationName,
    // authors: VariableMetadata.authors,
    // alternates: VariableMetadata.alternates,
    // appLinks: VariableMetadata.appLinks,
    // appleWebApp: VariableMetadata.appleWebApp,
    // archives: VariableMetadata.archives,
    // assets: VariableMetadata.assets,
    // bookmarks: VariableMetadata.bookmarks,
    // classification: VariableMetadata.classification,
    // creator: VariableMetadata.creator,
    // formatDetection: VariableMetadata.formatDetection,
    // generator: VariableMetadata.generator,
    // icons: VariableMetadata.icons,
    // itunes: VariableMetadata.itunes,
    // manifest: VariableMetadata.manifest,
    // metadataBase: VariableMetadata.metadataBase,
    // openGraph: VariableMetadata.openGraph,
    // other: VariableMetadata.other,
    // pagination: VariableMetadata.pagination,
    // pinterest: VariableMetadata.pinterest,
    // publisher: VariableMetadata.publisher,
    // referrer: VariableMetadata.referrer,
    // verification: VariableMetadata.verification,
}