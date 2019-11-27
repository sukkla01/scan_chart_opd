import React, { Component } from 'react'
import { Document, Page } from 'react-pdf';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Scrollbar from 'react-scrollbars-custom'
import { Button, Row, Col, Badge,Spin } from 'antd';

export default class ListPdf extends Component {
    constructor(props) {
        super(props)
        this.state = {

            numPages: null,
            pageNumber: 1,
            pageArr: [],
            size: 'large',
            arr: [],
            arr_page: [],
            end_apge: 10,
            pagegination: 0,
            isLoading: false,
            filePath: '../static/pdf/0080666.pdf'



        }
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ 
            numPages ,
            isLoading:false
        });
        let btn_page = Math.floor(numPages / this.state.end_apge) + 1



        for (let j = 0; j <= this.state.end_apge; j++) {
            this.state.arr.push(j)
        }

        for (let i = 1; i <= btn_page; i++) {
            this.state.arr_page.push(i)
        }
    }

    onClickSelect = (i) => {
        this.props.selectPdf(i)
    }


    clickPagination = i => {
     
        let end = this.state.end_apge* (i+1)
        let start = end - this.state.end_apge
        let arr2=[]
        
        this.setState({
            arr:[],
            isLoading:true,
            pagegination:i
        })
        for (let j = start; j <= end; j++) {
            arr2.push(j)
        }

   
        this.setState({
            arr : arr2,
            isLoading:false
        })


    }


    render() {
        const listPdfCard = this.state.arr.map((item, i) => {
           
            return i === 0 ? '' : item > this.state.numPages ? '' :
                <div className="list-pages" style={{ marginTop: 50,marginLeft:20, cursor: 'pointer' }} key={i}>
                    <span><Badge count={item} /></span> <Page pageNumber={item} width={200} onClick={() => this.onClickSelect(item)} />
                </div>
        })
        const pagenagin = this.state.arr_page.map((item, i) => {
            return<Button type="primary" onClick={() => this.clickPagination(i)}>{i + 1}</Button>
        })

        return (
            <div>
                
                <Row>

                    <Col span={24} offset={0}>
                        <Button.Group size="small" style={{ marginLeft: 10 }}>
                            {pagenagin}
                        </Button.Group> 
                    </Col>
                    <Col span={24} offset={0}>
                        Page No. {this.state.pagegination+1}
                    </Col>
                </Row>

                <Document
                    file={this.state.filePath}
                    onLoadSuccess={this.onDocumentLoad}

                >
                    <Scrollbar style={{ height: 1000 }}>
                     {this.state.isLoading ? <div style={{ textAlign:'center',marginTop:10}}><Spin tip="Loading..."></Spin></div> : '' }

                        {listPdfCard}
                    </Scrollbar>
                    {/* <Page pageNumber={pageNumber} width={1000} /> */}
                </Document>
            </div>
        )
    }
}
