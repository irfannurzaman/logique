import React from "react";
import { Col } from "antd"


const style = {
    container: {
        'top': '100px',
        padding: '10px 20px',
    }
}

function Menu({ children }) {
    return (
        <Col style={style.container}>
            {children}
        </Col>
    )
}

export default Menu