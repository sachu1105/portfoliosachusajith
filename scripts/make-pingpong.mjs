import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  console.error(
    "Usage: node scripts/make-pingpong.mjs <input.mp4> <output.mp4>"
  );
  process.exit(1);
}

if (!existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

if (!ffmpegPath) {
  console.error("ffmpeg binary not found from ffmpeg-static.");
  process.exit(1);
}

const args = [
  "-y",
  "-i",
  inputPath,
  "-filter_complex",
  "[0:v]reverse[rev];[0:v][rev]concat=n=2:v=1:a=0[v]",
  "-map",
  "[v]",
  "-an",
  "-c:v",
  "libx264",
  "-preset",
  "slow",
  "-crf",
  "12",
  "-pix_fmt",
  "yuv420p",
  "-movflags",
  "+faststart",
  outputPath,
];

console.log(`Creating ping-pong video:\n- input: ${inputPath}\n- output: ${outputPath}`);

const result = spawnSync(ffmpegPath, args, {
  stdio: "inherit",
});

if (result.error) {
  console.error("Failed to run ffmpeg:", result.error.message);
  process.exit(1);
}

if (result.status !== 0) {
  console.error(`ffmpeg exited with code ${result.status}`);
  process.exit(result.status ?? 1);
}

console.log("Ping-pong video generated successfully.");
