const TITLE = "//*[@text='Welcome! (Mobile)']";
const MENU_BUTTON = "//*[@content-desc='Sidebar, Show/hide the sidebar']";
const SYNCHRONIZE_BUTTON = "//*[@text='Synchronize']";
const SEARCH_BUTTON = "//*[@content-desc='Search']";
const FILTER_BUTTON = "//*[@content-desc='Sort notes by']";
const ADD_NEW_BUTTON = "//*[@content-desc='Add new']";
const ADD_NOTE_BUTTON = "//*[@content-desc='New note']";
const ALLOW_DEVICE_LOCATION_BUTTON = "//*[@text='ALLOW']";
const ADD_NOTE_TITLE_INPUT = "//*[@text='Add title']";
const ADD_NOTE_BODY_INPUT = "//*[@text='Add body']";
const BACK_LIST_NOTES_BUTTON = "//*[@content-desc='Back']";

export default class Page {
    constructor(){

    }

    async openMenu(){
        await $(MENU_BUTTON).waitForExist({ timeout: 6000 });
        await $(MENU_BUTTON).click();
        await $(SYNCHRONIZE_BUTTON).waitForExist({ timeout: 6000 });
    }

    async createNote(){
        await $(ADD_NEW_BUTTON).waitForExist({ timeout: 6000 });
        await $(ADD_NEW_BUTTON).click();
        await $(ADD_NOTE_BUTTON).waitForExist({ timeout: 6000 });
        await $(ADD_NOTE_BUTTON).click();
        await $(ALLOW_DEVICE_LOCATION_BUTTON).waitForExist({ timeout: 6000 });
        await $(ALLOW_DEVICE_LOCATION_BUTTON).click();
        await $(ADD_NOTE_TITLE_INPUT).waitForExist({ timeout: 6000 });
        await $(ADD_NOTE_TITLE_INPUT).setValue("6. Note title test 1");
        await $(ADD_NOTE_BODY_INPUT).waitForExist({ timeout: 6000 });
        await $(ADD_NOTE_BODY_INPUT).setValue("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dignissim dolor, nec commodo enim. Suspendisse ultricies hendrerit sagittis. Sed hendrerit hendrerit nunc. In ac elit porta, pulvinar mauris eu, consequat justo. Maecenas et augue eget urna gravida fermentum at ut magna. Proin mattis mauris et vestibulum auctor. Pellentesque pharetra rhoncus nulla in ullamcorper. Cras vel dignissim sem. Mauris fringilla congue commodo. Donec et arcu laoreet justo elementum euismod. Vivamus consequat, elit in imperdiet finibus, nisl mauris iaculis nibh, et volutpat nibh nibh id odio.");
        await $(BACK_LIST_NOTES_BUTTON).waitForExist({ timeout: 6000 });
        await $(BACK_LIST_NOTES_BUTTON).click();
        await $(BACK_LIST_NOTES_BUTTON).waitForExist({ timeout: 6000 });
        await $(BACK_LIST_NOTES_BUTTON).click();
        await $(TITLE).waitForExist({ timeout: 6000 });
    }
}