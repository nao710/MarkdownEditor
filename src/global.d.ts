declare global {
  interface Window {
    WindowControl: {
      close: () => Promise<string>
      min: () => Promise<string>
      max: () => Promise<string>
      restore: () => Promise<string>
    };
    FileControl: {
      LoadFile: () => Promise<string>
      SaveFile: () => Promise<string>
    }
  }
}
export { }
