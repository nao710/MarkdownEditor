// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld(
  'WindowControl', {
  close: () => ipcRenderer.invoke('close'),
  min: () => ipcRenderer.invoke('min'),
  max: () => ipcRenderer.invoke('max'),
  restore: () => ipcRenderer.invoke('restore')
},
)
contextBridge.exposeInMainWorld(
  'FileControl', {
  LoadFile: async () => { return await ipcRenderer.invoke('LoadFile') }
},
)
