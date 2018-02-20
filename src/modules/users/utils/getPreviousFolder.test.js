import { expect } from 'jest';
import getPreviousFolder from './getPreviousFolder';

describe('getPreviousFolder', () => {
  test('=============================', () => {
    const list = [
      { id: 'd1wy', name: 'Anthony' },
      { id: 'e2wh', name: 'Bob' },
      { id: 'f3wq', name: 'David' },
      { id: 'c4we', name: 'Mark' },
      { id: 'z5wd', name: 'Jim' },
    ];

    expect([]).toBeAn('array');
    expect([...list]).toEqual([...list]);
  });

  test('"getPreviousFolder" function > should return previous folder from array', () => {
    const previousFolders = [{ id: '111ww', title: 'folder1' }, { id: '222ww', title: 'folder2' }, { id: '333ww', title: 'folder3' }];

    expect(getPreviousFolder(previousFolders)).toEqual(previousFolders[1]);
  });

  test('"getPreviousFolder" function > should return null if length of previousFolders array if equal 1', () => {
    const previousFolders = [{ id: '111ww', title: 'folder1' }];

    expect(getPreviousFolder(previousFolders)).toBe(null);
  });
});
