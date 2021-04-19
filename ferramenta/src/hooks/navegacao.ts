import useStore from './store'

import {
  setCurrentComponet,
  setFeedbackType
} from '../store'

export interface Navegacao {
  next(): void;
  back(): void;
  setErrorState(): void;
  setSucessoState(): void;
}

export default function useNavegacao (): Navegacao {
  const store = useStore()

  function setErrorState (): void {
    setCurrentComponet('Error')
  }

  function setSucessoState (): void {
    setCurrentComponet('Sucesso')
  }

  function next (): void {
    if (store.currentComponent === 'SelectFeedbackType') {
      setCurrentComponet('EscreverFeedbacks')
    }
  }

  function back (): void {
    if (store.currentComponent === 'EscreverFeedbacks') {
      setCurrentComponet('SelectFeedbackType')
      setFeedbackType('')
    }
  }

  return { next, back, setErrorState, setSucessoState }
}
