//    hide-quicksettings-on-lock
//    GNOME Shell extension
//    @fthx 2025


import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class HideQuickSettingsOnLock {
    constructor(metadata) {
        Main.sessionMode.connectObject('updated', this._toggleQuickSettings.bind(this), this);
    }

    _toggleQuickSettings() {
        Main.panel.statusArea.quickSettings.visible = !Main.sessionMode.isLocked;
    }

    enable() {
    }

    disable() {
    }
}
