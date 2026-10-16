import {Config} from '@remotion/cli/config';
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
// The cloud image provides Chromium; override via REMOTION_BROWSER_EXECUTABLE.
Config.setBrowserExecutable(process.env.REMOTION_BROWSER_EXECUTABLE || '/usr/bin/chromium');
