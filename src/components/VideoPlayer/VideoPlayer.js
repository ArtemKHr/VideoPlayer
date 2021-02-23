import { memo } from 'react'

import './VideoPlayer.css'
import { useVideoPlayer } from './useVideoPlayer'

export const VideoPlayer = memo(({videoUrl, muted, autoPlay}) => {
  const {
    progress,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    progressRef,
    controlRef,
    videoRef,
    handleOnloadMetaData,
    handleTimerUpdate,
  } = useVideoPlayer()

  return (
    <div>
      <div className="wrapper">
        <video
          className="video"
          autoPlay={autoPlay}
          muted={muted}
          id="video"
          ref={videoRef}
          onLoadedMetadata={handleOnloadMetaData}
          onTimeUpdate={handleTimerUpdate}
        >
          <source
            src={videoUrl}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="progressBarWrap">
        <progress
          id="progress-bar"
          max="100"
          value={progress}
          className="progressBar"
          ref={progressRef}
        />
        {Boolean(progress) && (
           <div
             className="control"
             ref={controlRef}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
           />
        )}
      </div>
    </div>
  )
})
