import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Ben Zotti - Software Engineer" />
          <meta name="author" content="Ben Zotti" />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕️</text></svg>"
          ></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ----------------------------------------------------------------------
MyDocument.getInitialProps = async (ctx) => {
  //   const originalRenderPage = ctx.renderPage;

  //   const cache = createEmotionCache();
  //   const { extractCriticalToChunks } = createEmotionServer(cache);

  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       enhanceApp: (App) => (props) =>
  //         (
  //           <CacheProvider value={cache}>
  //             <App {...props} />
  //           </CacheProvider>
  //         ),
  //     });

  const initialProps = await Document.getInitialProps(ctx);

  //   const emotionStyles = extractCriticalToChunks(initialProps.html);
  //   const emotionStyleTags = emotionStyles.styles.map((style) => (
  //     <style
  //       data-emotion={`${style.key} ${style.ids.join(" ")}`}
  //       key={style.key}
  //       // eslint-disable-next-line react/no-danger
  //       dangerouslySetInnerHTML={{ __html: style.css }}
  //     />
  //   ));

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles)],
  };
};
