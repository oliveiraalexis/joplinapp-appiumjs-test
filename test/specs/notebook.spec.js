import Notebook from '../pages/notebook.page.js'

describe('Notebook tests', async () => {
    let notebook = new Notebook();

    it('Create new note', async () => {
        await notebook.createNote();
    });

    it('Sort notes by title', async () => {
        await notebook.sortNoteByTitle();
    });
    
    it('Open sidebar', async () => {
        await notebook.openMenu();
    });
});