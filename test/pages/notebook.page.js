const TITLE = "#00000000-0000-0096-ffff-ffff00000019";
const MENU_BUTTON = "//*[@content-desc='Sidebar, Show/hide the sidebar']";
const SYNCHRONIZE_BUTTON = "//*[@text='Synchronize']";
const SEARCH_BUTTON = "//*[@content-desc='Search']";
const FILTER_BUTTON = "//*[@content-desc='Sort notes by']";

export default class Page {
    constructor(){

    }

    async openMenu(){
        await $(MENU_BUTTON).waitForExist({ timeout: 6000 });
        await $(MENU_BUTTON).click();
        await $(SYNCHRONIZE_BUTTON).waitForExist({ timeout: 6000 });
    }
}