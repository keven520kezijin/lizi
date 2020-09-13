const WxApiRoot = 'http://www.liztrip.com/'
let videoPub, videoQuery
videoQuery = videoPub = `${WxApiRoot}v1/video`

// http://域名/v1/video/upload
const videoUpload = `${WxApiRoot}v1/video/upload`

module.exports = {
  videoPub,
  videoQuery,
  videoUpload,
  WxApiRoot
}
