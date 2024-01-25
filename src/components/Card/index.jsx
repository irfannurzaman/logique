import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const style = {
    img: {
        height: '30%', 
        width: '30%',
        borderRadius: 10    
    },
    column: {
        flexDirection: 'column',
        marginLeft: '5%',
        width: '60%'
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold'    
    },
    genre: {
        backgroundColor: '#10b981',
        padding: '2px 15px',
        fontSize: 11,
        color: '#fff',
        borderRadius: 10,
    },
    webkitline: {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '40%'
    }
}

const Cards = ({ item }) => (
        <Card bordered={false}>
            <Row>
                <img style={style.img}  alt="example" src={item.artworkUrl100} />
                <Row justify="space-between" style={style.column}>
                    <span style={{ fontSize: 11 }}>{item.artistName}</span>
                    <span style={{...style.title, ...style.webkitline,  WebkitLineClamp: 2}}>{item.collectionName}</span>
                    <Row justify="space-between">
                    <Col style={{...style.genre, ...style.webkitline,  WebkitLineClamp: 1}}>
                        {item.primaryGenreName}
                    </Col>
                        <Row style={{ color: 'orange' }}>
                            <RiMoneyDollarCircleLine size={20}/>
                            <span style={{ marginLeft: 5 }}>{item.collectionPrice}</span>
                        </Row>
                    </Row>
                </Row>
            </Row>
        </Card>
);
export default Cards;