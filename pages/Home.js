import React, { Component } from 'react'
import { Document, Page } from 'react-pdf';
import { Button, Row, Col, Icon, Layout,Menu, Divider } from 'antd';
import ListPdf from './ListPdf';
import 'antd/dist/antd.css';
// import ReactWaterMark from 'react-pdf-watermark/dist/index';

const { Header, Content, Footer } = Layout;

export default class Home extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
        filePath: '../static/pdf/0080666.pdf',
        pageWidth: 1000
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    onclickNext = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1
        })
    }
    onclickPre = () => {
        this.setState({
            pageNumber: this.state.pageNumber - 1
        })
    }


    onSelectPdf = (i) => {
        this.setState({
            pageNumber: i
        })
    }
    onclickIn = () => {
        this.setState({
            pageWidth: this.state.pageWidth + 50
        })
    }
    onclickOut = () => {
        this.setState({
            pageWidth: this.state.pageWidth - 50
        })
    }


    render() {
        const { pageNumber, numPages } = this.state;
        const text = `text`;
        const beginAlarm = function () { console.log('start alarm'); };
        const options = {
            chunkWidth: 200,
            chunkHeight: 60,
            textAlign: 'left',
            textBaseline: 'bottom',
            globalAlpha: 0.17,
            font: '14px Microsoft Yahei',
            rotateAngle: -0.26,
            fillStyle: '#666'
        }

        return (
            <div>
                 <Layout className="layout">
                <Header>
                        <div className="logo" ></div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Divider />
                <Row >
                    <Col span={4}>
                        <div style={{ marginTop: 50 }}>

                            <ListPdf selectPdf={this.onSelectPdf} />
                        </div>
                    </Col>
                    <Col span={20}>
                        <Row>
                            <Col span={8}>
                                <Button.Group size="large">
                                    <Button type="primary" onClick={this.onclickPre}>
                                        <Icon type="left" />
                                        ก่อนหน้า
                            </Button>
                                    <Button type="primary" onClick={this.onclickNext}>
                                        ถ้ดไป
                            <Icon type="right" />
                                    </Button>
                                </Button.Group>

                                 <span> หน้า {this.state.pageNumber}</span>
                            </Col>
                            <Col span={4} offset={12}>
                                <Button.Group size="large" style={{ marginLeft: 20 }}>
                                    <Button type="primary" onClick={this.onclickIn}>
                                        <Icon type="zoom-in" />
                                        ขยาย
                            </Button>
                                    <Button type="primary" onClick={this.onclickOut}>
                                        <Icon type="zoom-out" />
                                        ย่อ
        
                            </Button>
                                </Button.Group>
                            </Col>
                        </Row>




                        <div style={{ marginTop: 10 }}>
                            {/* <ReactWaterMark> */}

                            <Document
                                file={this.state.filePath}
                                onLoadSuccess={this.onDocumentLoad}

                            >
                                <Page pageNumber={pageNumber} width={this.state.pageWidth} />
                            </Document>
                            {/* </ReactWaterMark> */}
                        </div>
                        <p>Page {pageNumber} of {numPages}</p>
                    </Col>
                </Row>


                </Layout>

            </div>
        )
    }
}
