const { app } = require('electron')
const ffmpegPath = require('ffmpeg-static')
const { path: ffprobePath } = require('ffprobe-static')

app.on('ready', () => {
    console.log('FFMPEG PATH', ffmpegPath)
    console.log('FFPROBE PATH', ffprobePath)
})
