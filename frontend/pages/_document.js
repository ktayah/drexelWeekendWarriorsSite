import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class DocumentFlexFullHeight extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }
    render() {
        return (
            <html lang="en-US" className="h-100">
                <Head />
                <body className="d-flex flex-column">
                    <style>
                    {
                        `#__next { height: 100vh }`
                    }
                    </style>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
export default DocumentFlexFullHeight;