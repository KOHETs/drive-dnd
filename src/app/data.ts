import { DriveItem } from './models';

export const driveItemData: DriveItem[] = [
  {
    name: 'Folder 1',
    type: 'folder',
  },
  {
    name: 'Folder 2',
    type: 'folder',
  },
  {
    name: 'Folder 3',
    type: 'folder',
  },
  {
    name: 'Folder 4',
    type: 'folder',
  },
  {
    name: 'File 1',
    type: 'file',
  },
  {
    name: 'File 2',
    type: 'file',
  },
  {
    name: 'File 3',
    type: 'file',
  },
];

export const folderData: DriveItem[] = driveItemData.filter(
  item => item.type === 'folder',
);
