function init (apiKey) {

    async function handleLoadWidget () {
        const page = `${window.location.origin}${window.location.pathname}`
        const fingerprint = await window.FingerprintJS.load()
        const fingerprintjs = await fingerprint.get()

        const WIDGET_URL = `https://alex-bento-feedbacker-ferramenta.netlify.app?api_key${apiKey}&page=${page}&fingerprint=${fingerprintjs.visitorID}`
        
        const config = {method: 'Head' }
        const response = await fetch(`https://backend-treinamento-vue3.vercel.app/apikey/exissts?apikey=${apiKey}`, config)

        if (response.status === 200) {
            const iframe = document.createElement('iframe')
            iframe.src = WIDGET_URL
            iframe.id = 'feedbacker-iframe'
            iframe.style.position = 'fixed'
            iframe.style.bottom = '0px'
            iframe.style.right = '0px'
            iframe.style.overflow = 'hidden'
            iframe.style.border = '0px'
            iframe.style.zIndex = '99999'
            document.body.appendChild(iframe)

            window.addEventListener('message', (event) => {
                if (!event.data.isWidget) return 
                if (event.data.isOpen) {
                    iframe.width = '100%'
                    iframe.height = '100%'
                } else {
                    iframe.width = '300px'
                    iframe.height = '150px'
                }
            })
            return
        }

        console.log('* [feedbacker] was not loaded because apikey does not exists')
    }    

    const script = document.createElement('script')
    script.src = '//cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js'
    script.async = 'async'
    script.addEventListener('load', handleLoadWidget)

    document.body.appendChild(script)
}

window.init = init