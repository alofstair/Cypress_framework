export function applitoolseyesmulti(appid, batchid, browser1, browser2, browser3, browser4) {
    cy.eyesOpen({
        appName: appid,
        batchName: batchid,
        browser: [
            {name: browser1, width: 1024, height: 768},
            {name: browser2, width: 1024, height: 768},
            {name: browser3, width: 1024, height: 768},
            {name: browser4, width: 1024, height: 768},
        ]
    })
}

export function applitoolseyessingle(appid, batchid, browser1) {
    cy.eyesOpen({
        appName: appid,
        batchName: batchid,
        browser: [
            {name: browser1, width: 1024, height: 768},
        ]
    })
}

export function eyesscreenshot(pagename) {
    cy.eyesCheckWindow(pagename)
}