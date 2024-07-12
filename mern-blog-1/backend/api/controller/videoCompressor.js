const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const path = require("path");
const fs = require("fs").promises;
const ErrorHandler = require("../utils/errorHandler");

ffmpeg.setFfmpegPath(ffmpegPath);

class VideoCompressor {
  static compressVideo(videoPath) {
    return new Promise((resolve, reject) => {
      const outputPath = `compressed-${path.basename(videoPath)}`;

      ffmpeg(videoPath)
        .output(outputPath)
        .outputOptions(["-vf scale=1280:720", "-preset slow"])
        .on("end", async () => {
          try {
            const compressedSize = (await fs.stat(outputPath)).size;
            resolve({ outputPath, compressedSize });
          } catch (err) {
            reject(err);
          }
        })
        .on("error", (err, stdout, stderr) => {
          console.error("ffmpeg error:", err);
          console.error("ffmpeg stdout:", stdout);
          console.error("ffmpeg stderr:", stderr);
          reject(err);
        })
        .run();
    });
  }

  static vidCompressor = async (req, res, next) => {
    try {
      if (!req.file) {
        console.error("File not received:", req);
        throw new ErrorHandler("Video file is required", 404);
      }

      const { path: videoPath } = req.file;
      const originalSize = (await fs.stat(videoPath)).size;
      const originalSizeMB = (originalSize / (1024 * 1024)).toFixed(2);

      const { outputPath, compressedSize } =
        await VideoCompressor.compressVideo(videoPath);
      const compressedSizeMB = (compressedSize / (1024 * 1024)).toFixed(2);

      res.status(200).json({
        status: true,
        msg: "Video compressed successfully",
        originalSize: `${originalSizeMB} MB`,
        compressedSize: `${compressedSizeMB} MB`,
        compressedVideoPath: outputPath,
      });
    } catch (error) {
      console.error("Error compressing video:", error);
      next(new ErrorHandler("Failed to compress video", 500));
    }
  };
}

module.exports = VideoCompressor;
