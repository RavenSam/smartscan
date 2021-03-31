import Head from "next/head"

export default function Meta({ title, desc }) {
   return (
      <Head>
         <title>{title}</title>
         <meta name="description" content={desc} />
         <meta property="og:type" content="website" />
         <meta name="og:title" property="og:title" content={title} />
         <meta name="og:description" property="og:description" content={desc} />
      </Head>
   )
}
