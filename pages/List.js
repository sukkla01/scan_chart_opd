import React, { Component } from 'react'
import { Document, Page } from 'react-pdf';

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {

            numPages: null,
            pageNumber: 1,
            pageArr: [],
            size: 'large',
            arr: []


        }
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
        console.log(numPages)

        for (let j = 0; j <= numPages; j++) {
            this.state.arr.push(j)
        }
    }
    render() {
        return (
            <div>
                <Document
                    file="../static/pdf/620006418.pdf"
                    onLoadSuccess={this.onDocumentLoad}

                >
                    {/* <Page pageNumber={pageNumber} width={1000} /> */}
                </Document>
            </div>
        )
    }
}
