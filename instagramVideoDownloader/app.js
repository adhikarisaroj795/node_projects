const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
const PORT = 3000;

app.get("/download", async (req, res) => {
  const videoUrl = req.query.videoUrl;

  if (!videoUrl) {
    return res.status(400).send("missing URL parameter");
  }
  try {
    const info = await ytdl.getInfo(videoUrl);
    const format = ytdl.chooseFormat(info.formats, { quality: "highest" });
    res.header(
      "content-Disposition",
      `attachment; filename="${info.videoDetails.title}.mp4`
    );
    ytdl(videoUrl, { format: format }).pipe(res);
  } catch (error) {
    console.error("eror downloading video");
    res.status(500).send("error downloding video");
  }
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
