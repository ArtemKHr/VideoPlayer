import {
  useRef,
  useState,
} from 'react'

export const useVideoPlayer = () => {
  const [progress, setProgress] = useState(0)
  const [videoDuration, setVideoDuration] = useState(0)

  const progressRef = useRef()
  const controlRef = useRef()
  const videoRef = useRef()

  const handleTouchStart = () => {
    videoRef.current.pause()
  }
  const handleTouchMove = (event) => {
    const video = videoRef.current
    const position = event.changedTouches[0].pageX - video.getBoundingClientRect().left
    const percents = (position / progressRef.current.offsetWidth) * 100

    video.currentTime = videoDuration * (percents / 100)
  }

  const handleTimerUpdate = (event) => {
    const video = event.target
    const progress$ = (100 / video.duration) * video.currentTime
    const position = (progress$ / 100) * progressRef.current.offsetWidth

    setProgress(progress$)
    if(controlRef.current){
      controlRef.current.style.left = `${position}px`
    }
  }

  const handleTouchEnd = () => {
    videoRef.current.play()
  }

  const handleOnloadMetaData = (event) => {
    setVideoDuration(event.target.duration)
  }

  return {
    handleTouchMove,
    handleTouchEnd,
    handleTouchStart,
    progress,
    videoDuration,
    videoRef,
    progressRef,
    controlRef,
    handleOnloadMetaData,
    handleTimerUpdate,
  }
}
