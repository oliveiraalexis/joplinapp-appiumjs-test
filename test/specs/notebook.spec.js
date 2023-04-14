import Notebook from '../pages/notebook.page.js'

describe('Notebook', async () => {
    it('Open Sidebar', async () => {
        let notebook = new Notebook();
        await notebook.openMenu();
    });
});