import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/home.css";
import "@/styles/footer.css";
import "@/styles/pages.css";
import "@/styles/admin.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {" "}
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&family=Quicksand&display=swap&apos;);
          {/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap'); */}
          {/* @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@200;300&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap'); */}
        </style>
       
        <style>
  @import url(&apos;https://fonts.googleapis.com/css2?family=Aboreto&family=Charis+SIL:wght@700&family=Inconsolata:wght@500&family=Josefin+Sans&family=Margarine&family=Montserrat:wght@300&family=Nunito&family=Roboto&family=Rubik:ital,wght@0,400;1,300&family=Space+Mono:wght@400;700&family=Ubuntu+Condensed&display=swap&apos;);
</style>

<style>
@import url(&apos;https://fonts.googleapis.com/css2?family=Aboreto&family=Charis+SIL:wght@700&family=Dancing+Script&family=Inconsolata:wght@500&family=Josefin+Sans&family=Margarine&family=Montserrat:wght@300&family=Nunito&family=Roboto&family=Rubik:ital,wght@0,400;1,300&family=Space+Mono:wght@400;700&family=Ubuntu+Condensed&display=swap&apos;);
</style>

      
      </Head>
      <Component {...pageProps} />
    </>
  );
}





// <style>
// @import
// url(&quothttps://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap&quot);
// @import
// url(&quothttps://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap&quot);
// @import
// url(&quothttps://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&family=Staatliches&display=swap&quot);
// </style>
// <style>
// @import
// url(&quothttps://fonts.googleapis.com/css2?family=Lora:wght@500&family=Merriweather:wght@300&display=swap&quot);
// </style>
// <style>
// @import
// url(&quothttps://fonts.googleapis.com/css2?family=Lora:wght@500&family=Merriweather:wght@300&family=Rubik:wght@300&display=swap&quot);
// </style>
// <style>
// @import
// url(&quothttps://fonts.googleapis.com/css2?family=Dancing+Script&family=Lora:wght@500&family=Merriweather:wght@300&family=Rubik:wght@300&display=swap&quot);
// </style>
