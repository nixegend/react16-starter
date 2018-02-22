import getPreviousFolder from './getPreviousFolder';

describe('getPreviousFolder', () => {
  it('"getPreviousFolder" function > should return previous folder from array', () => {
    const previousFolders = [{ id: '111ww', title: 'folder1' }, { id: '222ww', title: 'folder2' }, { id: '333ww', title: 'folder3' }];
    expect(getPreviousFolder(previousFolders)).toEqual(previousFolders[1]);
  });

  it('"getPreviousFolder" function > should return null if length of previousFolders array if equal 1', () => {
    const previousFolders = [{ id: '111ww', title: 'folder1' }];
    expect(getPreviousFolder(previousFolders)).toBeNull();
  });
});
