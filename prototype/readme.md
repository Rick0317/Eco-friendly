### Features

On the page where the extension is clicked,

- Get the URL
- Get the length of data received

### How it works

Uses the [`chrome.debugger` API](https://developer.chrome.com/docs/extensions/reference/debugger/) so the extension has access to everything available in [Chrome DevTools](https://developer.chrome.com/docs/devtools/overview/)

### Using the `chrome.debugger` API

[Docs](https://developer.chrome.com/docs/extensions/reference/debugger/)

```
// Attaches debugger to the given target
chrome.debugger.attach(
  target: Debuggee,
  requiredVersion: string,
  callback?: function,
)

// Sends given command to the debugging target
chrome.debugger.sendCommand(
  target: Debuggee,
  method: string,
  commandParams?: object,
  callback?: function,
)

// Fired whenever debugging target issues instrumentation event
chrome.debugger.onEvent.addListener(
  callback: function,
)
```

### Using the DevTools Protocol

[Overview](https://chromedevtools.github.io/devtools-protocol/)

[Network](https://chromedevtools.github.io/devtools-protocol/1-2/Network/)

### Sample implementations

[Basics](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

[Using `chrome.debugger` and DevTools](https://stackoverflow.com/a/15626197)

[Monitoring network](https://stackoverflow.com/a/30557846)

### Not working?
Click the `cancel` button (below the URL bar) and try again