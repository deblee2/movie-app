import React from 'react'
import { Col } from 'antd';

function GridCards(props) {

    if (props.landingPage) {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    {/* a tag가 있으면 누르면 다음 페이지로 넘어감 */}
                    <a href={`/movie/${props.movieId}`} >
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                    </a>
                </div>
            </Col>
        )

    } else {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.characterName} />
                </div>
            </Col>
        )
    }
}

export default GridCards 