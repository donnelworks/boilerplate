import {registerSheet} from 'react-native-actions-sheet';
import PermissionSettingSheet from './PermissionSettingSheet';
import NoInternetSheet from './NoInternetSheet';
import AppUpdateSheet from './AppUpdateSheet';

registerSheet('permission-setting-sheet', PermissionSettingSheet);
registerSheet('no-internet-sheet', NoInternetSheet);
registerSheet('app-update-sheet', AppUpdateSheet);

export {};
