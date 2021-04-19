import {
  setApiKey,
  setCurrentPage,
  setFingerprint
} from '../store'

interface IfraneControl {
  updateCoreValuesOnStore(): void;
  notifyOpen(): void;
  notifyClose(): void;
}

export default function useIframeControl (): IfraneControl {
  function updateCoreValuesOnStore (): void {
    if (process.env.NODE_ENV === 'production') {
      const query = new URLSearchParams(window.location.search)
      const apikey = query.get('api_key') ?? ''
      const page = query.get('page') ?? ''
      const fingerprint = query.get('figerprint') ?? ''

      setCurrentPage(page)
      setApiKey(apikey)
      setFingerprint(fingerprint)
      return
    }

    setCurrentPage('https://playground-url.com')
    setApiKey('fcd5015c-10d3-4e9c-b395-ec7ed8850166')
    setFingerprint('123456789')
  }
  function notifyOpen (): void {
    window.parent.postMessage({
      isWidget: true,
      isOpen: true
    }, '*')
  }

  function notifyClose (): void {
    window.parent.postMessage({
      isWidget: true,
      isOpen: false
    }, '*')
  }

  return {
    updateCoreValuesOnStore,
    notifyOpen,
    notifyClose
  }
}
