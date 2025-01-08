
function show_on_youtube() {
    document.head.remove()
    document.body.innerHTML = `
    <div id="mainBox"
    style="
        display: flex;
        position: fixed;
        width: 100vw;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: small;
        font-weight: bold;
        flex-direction: column;
    ">
        <div style="
           padding: 5% 2%;
            border-radius: 5px;
            box-shadow: 0 0 10px;
            top: -500px;
            text-align: center;
            transistion: 2s
            top: 100px


        
        ">
            <img src="https://media1.tenor.com/m/Scu6ExRW824AAAAC/inside-out.gif">
            <h1 style="font-size: "xx-large", font-width: "bolder" >
            KAAM KUM KAR LA NA.
            </h1>
            <h2>
            Chalvau Terako YOUTUBE
            </h2>
        </div>
    </div>`
}

function show_on_insta() {
    document.head.remove()
    document.body.innerHTML = `
    <div id="mainBox"
    style="
        display: flex;
        position: fixed;
        width: 100vw;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: small;
        font-weight: bold;
        flex-direction: column;
    ">
        <div style="
           padding: 5% 2%;
            border-radius: 5px;
            box-shadow: 0 0 10px;
            top: -500px;
            text-align: center;
            transistion: 2s
            top: 100px


        
        ">
            <img src="https://media1.tenor.com/m/Scu6ExRW824AAAAC/inside-out.gif">
            <h1 style="font-size: "xx-large", font-width: "bolder" >
            KAAM KUM KAR LA NA.
            </h1>
            <h2>
            Chalvau Terako Instagram Aya Bada
            </h2>
        </div>
    </div>
    `
}

function PauseDistraction() {
    let current_url = window.location.href
    if (current_url.includes('instagram.com')) {
        show_on_insta()
    }

    if (current_url.includes('youtube.com')) {
        show_on_youtube()
    }


}


PauseDistraction()
