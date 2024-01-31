import "./index.css"

export const Square = ({ width }) => {
  // console.log(styles)
  return (
    <div style={{
      width: width ? width : "50px",
      height: width ? width : "50px"
    }} className="square" />
  )
}

export const Rectangle = ({ height, width, text = null }) => {
  return (
    <div style={{
      width: width ? width : "50px",
      minWidth: width ? width : "150px",
      height: height ? height : "30px",
    }} className="square" >
      {text}
    </div>
  )
}

