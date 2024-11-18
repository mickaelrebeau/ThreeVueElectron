const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("myAPI", {
	example: () => "Hello from Electron",
});
