import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    
    return (
      <Html lang="nl">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Mukta&display=swap"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />     
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}