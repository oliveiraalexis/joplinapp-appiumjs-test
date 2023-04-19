import Notebook from '../pages/notebook.page.js'

describe('Notebook tests', async () => {
    let notebook = new Notebook();

    it('Open sidebar', async () => {
        await notebook.openMenu();
    });

    it('Create new note', async () => {
        await notebook.createNote();
    });

    it('Sort notes by title', async () => {
        await notebook.sortNoteByTitle();
    });

    it('Search note', async () => {
        await notebook.searchNote();
    });

    it('Open note', async () => {
        await notebook.openNote();
    });
    
});