import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { Options } from "./quartz/components/Explorer"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
    head: Component.Head(),
    header: [],
    afterBody: [],
    footer: Component.Footer({
        links: {
            "Google Scholar": "https://scholar.google.com/citations?user=gvYEpF0AAAAJ",
            "researchmap": "https://researchmap.jp/takanobu-furuhashi",
            "Twitter (Researcher Account)": "https://twitter.com/furu_nov",
            "Twitter (Daily Account)": "https://twitter.com/nov_sin_k",
            "Annict": "https://annict.com/@Nov/watching",
        },
    }),
}

export const mapFn: Options["mapFn"] = (node) => {
    const prefixDict: { [key: string]: string } = {
        "スパース": "0️⃣",
        "深層学習": "🧠",
        "LaTeX": "✒️",
        // 必要に応じて他のタグも追加
    }
    let prefix = node.isFolder ? "📁" : ""

    if (node.data?.tags) {
        for (const tag of node.data.tags) {
            for (const key in prefixDict) {
                if (tag.includes(key)) {
                    prefix = prefix + prefixDict[key]
                    break
                }
            }
        }
    }
    if (prefix) {
        prefix = prefix + " "
    }
    node.displayName = prefix + node.displayName
}
// export const filterFn: Options["filterFn"] = (node) => {
//     // implement your function here
// }
export const sortFn: Options["sortFn"] = (a, b) => {
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
        let tag_a_is_primary = a.data?.tags?.some(tag => tag.includes("スパース")) ?? false
        let tag_b_is_primary = b.data?.tags?.some(tag => tag.includes("スパース")) ?? false

        // boolean を int（-1, 1）に変換
        if (tag_a_is_primary !== tag_b_is_primary) {
            return tag_a_is_primary ? -1 : 1
        } else {
            return a.displayName.localeCompare(b.displayName, undefined, {
                numeric: true,
                sensitivity: "base",
            })
        }
    }

    if (!a.isFolder && b.isFolder) {
        return 1
    } else {
        return -1
    }
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    beforeBody: [
        Component.ConditionalRender({
            component: Component.Breadcrumbs(),
            condition: (page) => page.fileData.slug !== "index",
        }),
        Component.ArticleTitle(),
        Component.ContentMeta(),
        Component.TagList(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                {
                    Component: Component.Search(),
                    grow: true,
                },
                { Component: Component.Darkmode() },
            ],
        }),
        Component.Explorer({
            mapFn: mapFn,
            sortFn: sortFn,
            // filterFn: filterFn,
        }),
    ],
    right: [
        // Component.Graph(),
        Component.DesktopOnly(Component.TableOfContents()),
        // Component.Backlinks(),
        Component.RecentNotes({ limit: 3, linkToMore: "tags" }),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
    beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                {
                    Component: Component.Search(),
                    grow: true,
                },
                { Component: Component.Darkmode() },
            ],
        }),
        Component.Explorer({
            mapFn: mapFn,
            sortFn: sortFn,
            // filterFn: filterFn,
        }),
    ],
    right: [],
}
