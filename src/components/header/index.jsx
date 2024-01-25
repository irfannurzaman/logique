import React, { useState } from 'react';
import { Col, Row, Button, Input } from 'antd';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const style = {
    bar: {
        padding: '18px 2% 22.2px',
        'box-shadow': '0 0 6px 0 rgba(148, 77, 230, 0.75)',
        'background-image': 'linear-gradient(100deg, #712bda, #a45deb 100%)',
        'border-top-left-radius':'10px',
        'border-top-right-radius':'10px',
        'border-bottom-left-radius': '50% 20%',
        'border-bottom-right-radius': '50% 20%',
        width:'105%',
        height:'10%',
        left:'-3%',
        position: 'fixed',
        zIndex: 99,
        top: -5
        
    },
    label: {
        color: '#fff',
        fontSize: 22
    }
}

function Header({
    onClick,
    onChange
}) {
    const [input, setInput] = useState(false)
    
    return (
        <Row style={style.bar} justify="space-between">
            <Col>
                <Button type="text">
                    <GiHamburgerMenu color='#fff' size={25} />
                </Button>
            </Col>
            <Col>
                {!input ? <span style={style.label}>ngMusic</span> : <Input
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            onClick()
                            setInput(!input)
                        }
                    }}
                    onChange={onChange} />}
            </Col>
            <Col>
                <Button onClick={() => setInput(!input)} type="text">
                    {!input ? <FaSearch color='#fff' size={22}/> : <IoClose color='#fff' size={22}/>}
                </Button>
            </Col>
        </Row>
    )
}

export default Header;