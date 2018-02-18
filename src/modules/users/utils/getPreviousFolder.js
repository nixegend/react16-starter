const getPreviousFolder = (previousFolders) =>
  ((previousFolders && previousFolders.length === 1) ? null : previousFolders[previousFolders.length - 2]);

export default getPreviousFolder;
