

const Clips = ({ clip, imgsrc }) => {
  return (
    <>
      <div className='relative h-28 w-32'>
        <img
          src={imgsrc}
          alt="img/clips"
          className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0'
        />
        <video>
          <source type='video/mp4'src={clip}/>
        </video>
      </div>
    </>
  )
}

export default Clips
