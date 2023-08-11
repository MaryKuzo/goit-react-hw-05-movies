import { BallTriangle } from  'react-loader-spinner'

const Loading = () => {
  return (
    <>
     <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#E48995"
      ariaLabel="ball-triangle-loading"
      visible={true}
    /></>

  )
}
export default Loading
