import { Cordova, Plugin } from 'ionic-native';

@Plugin({
  plugin: 'cordova-plugin-spinnerdialog-acrop',
  pluginRef: 'SpinnerDialog',
  pluginName: 'SpinnerDialog',
  repo: 'https://github.com/acrop/cordova-plugin-spinnerdialog',
  platforms: ['Android', 'iOS']
})
export class SpinnerDialog {
  @Cordova({
    sync: true
  })
  static show(title: string, message: string, cancelCallback: boolean | ((data: any) => any)): void {};

  @Cordova({
    sync: true
  })
  static hide(success: () => void, fail: () => void): void {};
}
