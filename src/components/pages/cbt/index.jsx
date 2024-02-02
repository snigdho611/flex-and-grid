// import React from 'react'
import { useEffect, useRef, useState } from "react"
import { BlockHL, BlockVR, BlockVRLong, BlockHR } from "../../atoms/SkewedBlock"
import "./index.scss"

const Cbt = () => {
    const firstBlock = useRef(0);
    const [firstBlockElements, setFirstBlockElements] = useState(0);
    useEffect(() => {
        if (firstBlock.current.offsetHeight) {
            setFirstBlockElements(Math.ceil(firstBlock.current.offsetHeight / 120));
        }
    }, [firstBlock])
    console.log(Math.ceil(firstBlock.current.offsetHeight))
    return (
        // <img src="/cbt.png" alt="Not found" />
        <div className="main">
            <div style={{}} className="row-1">
                {Array(6).fill(1).map((element, i) => {
                    return (<BlockHL key={i} />)
                })}
            </div>
            {/* <div className="row-2"> */}
            <div >
                {Array(firstBlockElements).fill(1).map((element, i) => {
                    return (<BlockVR key={i} />)
                })}
                <BlockVRLong />
            </div>
            <div style={{}} ref={firstBlock}>
                Fusce sollicitudin sagittis dolor eget consectetur. Etiam sit amet aliquam est, ut porta enim. Duis sagittis, tellus eu facilisis placerat, eros nisl cursus enim, eget placerat felis erat quis purus. Fusce in leo non nisi tempor consectetur vel vitae dui. Phasellus fermentum turpis odio, at pellentesque lacus pharetra eget. Etiam vestibulum, massa eget euismod posuere, mi odio efficitur ante, non dictum turpis dui suscipit dolor.

                Fusce sollicitudin sagittis dolor eget consectetur. Etiam sit amet aliquam est, ut porta enim. Duis sagittis, tellus eu facilisis placerat, eros nisl cursus enim, eget placerat felis erat quis purus. Fusce in leo non nisi tempor consectetur vel vitae dui. Phasellus fermentum turpis odio, at pellentesque lacus pharetra eget. Etiam vestibulum, massa eget euismod posuere, mi odio efficitur ante, non dictum turpis dui suscipit dolor.

                Fusce sollicitudin sagittis dolor eget consectetur. Etiam sit amet aliquam est, ut porta enim. Duis sagittis, tellus eu facilisis placerat, eros nisl cursus enim, eget placerat felis erat quis purus. Fusce in leo non nisi tempor consectetur vel vitae dui. Phasellus fermentum turpis odio, at pellentesque lacus pharetra eget. Etiam vestibulum, massa eget euismod posuere, mi odio efficitur ante, non dictum turpis dui suscipit dolor.

                Fusce sollicitudin sagittis dolor eget consectetur. Etiam sit amet aliquam est, ut porta enim. Duis sagittis, tellus eu facilisis placerat, eros nisl cursus enim, eget placerat felis erat quis purus. Fusce in leo non nisi tempor consectetur vel vitae dui. Phasellus fermentum turpis odio, at pellentesque lacus pharetra eget. Etiam vestibulum, massa eget euismod posuere, mi odio efficitur ante, non dictum turpis dui suscipit dolor.

                Fusce sollicitudin sagittis dolor eget consectetur. Etiam sit amet aliquam est, ut porta enim. Duis sagittis, tellus eu facilisis placerat, eros nisl cursus enim, eget placerat felis erat quis purus. Fusce in leo non nisi tempor consectetur vel vitae dui. Phasellus fermentum turpis odio, at pellentesque lacus pharetra eget. Etiam vestibulum, massa eget euismod posuere, mi odio efficitur ante, non dictum turpis dui suscipit dolor.

            </div>
            {/* </div> */}
            <div className="row-3">
                {Array(6).fill(1).map((element, i) => {
                    return (<BlockHR key={i} />)
                })}
                {/* <BlockVRLong /> */}
            </div>
        </div>
    )
}

export default Cbt;