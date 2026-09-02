const widgetContainer = document.getElementById('widgetContainer');

const currentURL = window.location.href;
const baseURL = new URL('./', currentURL);
const settingsJSON = new URL('settings.json', baseURL);
const widgetURL = new URL('../', baseURL);
const settingsPageURL = new URL('../../.common/core/settings-core/', baseURL);
settingsPageURL.searchParams.set('v', '2');
settingsPageURL.searchParams.set('settingsJson', settingsJSON.href);
settingsPageURL.searchParams.set('widgetURL', widgetURL.href);

console.debug("Window Ref: " + window.location.href);
console.debug("Base URL: " + baseURL.href);
console.debug("Settings JSON: " + settingsJSON.href);
console.debug("Widget URL: " + widgetURL.href);

widgetContainer.src = settingsPageURL.href;
