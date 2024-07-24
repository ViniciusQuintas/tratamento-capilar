'use client'

import YouTube, { YouTubeProps } from 'react-youtube'

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo()
}
const opts: YouTubeProps['opts'] = {
  playerVars: {
    autoplay: 1,
    start: 17,
  },
}

export default function Video() {
  return (
    <section className="container mx-auto overflow-hidden pb-12">
      <YouTube
        videoId="wcKbehJ-hjE"
        opts={opts}
        onReady={onPlayerReady}
        className="h-[60vh]"
      />
    </section>
  )
}
