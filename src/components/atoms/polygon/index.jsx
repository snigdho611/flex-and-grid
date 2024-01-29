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
      height: height ? height : "50px",
    }} className="square" >
      {text}
    </div>
  )
}

Square.propTypes = {
  width: String
}

Rectangle.propTypes = {
  width: String,
  height: String,
  text: String || Number || null
}
