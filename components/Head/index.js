import Head from 'next/head'
import userInfo from "../../data/usersInfo.json"

export default function DomHead({ pageName = "Home Page" }) {

    return (
        <Head>
            <title>Tobithealpha - {pageName} </title>
            <meta charset="UTF-8" />
    <link rel="icon" type="image/ico" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* <!-- Primary Meta Tags --> */}
    <meta
      name="keywords"
      content="tobithealpha,tobithedev,emekathealpha,uche emeka tobi,uche chukwuemeka oluwatobi,texxalabs, texxalabs ceo, texxalabs founder,dativejs,creator of dativejs,founder of frixxapp"
    />
    <title>TobitheAlpha</title>
    <meta name="title" content="TobitheAlpha"/>
    <meta name="description" content="TobitheAlpha is the Founder of Texxalabs" />
    <meta name="google-site-verification" content="ByREhs1KkqW2wE-NBlvHR3OEkMU5lbiSSYNmAZ_6qJw" />
    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://tobithedev.github.io/" />
    <meta property="og:title" content="TobitheAlpha" />
    <meta property="og:description" content="TobitheAlpha is the Founder of Texxalabs Technology" />
    <meta property="og:image" content="tobi.png" />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://tobithedev.github.io/" />
    <meta property="twitter:title" content="TobitheAlpha" />
    <meta property="twitter:description" content="TobitheAlpha is the Founder of Texxalabs Technology" />
    <meta property="twitter:image" content="tobi.png" />
            {/* meta tags end */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
    )
}

