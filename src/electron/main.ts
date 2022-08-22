import { app, BrowserWindow } from "electron";

app.on("ready", () => {
  const win = new BrowserWindow({
    title: "Main window",
    transparent: true,
    frame: false,
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    // load your file
    win.loadFile("yourOutputFile.html");
  }
});
