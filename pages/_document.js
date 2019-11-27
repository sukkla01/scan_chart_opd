import Document, { Head, Main, NextScript } from 'next/document'
// import 'antd/dist/antd.css';

// import 'moment/locale/th';

export default class Mydocument extends Document {
    render() {
        return (
            <html>
                <Head>

                    <link rel="stylesheet" href="static/antd/dist/antd.css" />
                   
                    <link href="https://fonts.googleapis.com/css?family=Prompt|Ubuntu:400,300" rel="stylesheet" />




                </Head>
                <body className="sidebar-mini layout-fixed sidebar-collapse">
                    <Main />
                    <NextScript />

                    
                    

                </body>
            </html>
        )
    }

}