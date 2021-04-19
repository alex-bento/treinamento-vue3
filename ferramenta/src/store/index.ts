import { reactive, readonly } from 'vue'

export type Storestate = {
    currentComponent: string;
    feedbackType: string;
    message: string;
    apiKey: string;
    fingerprint: string;
    currentPage: string;
}

const initalState: Storestate = {
  currentComponent: 'SelectFeedbackType',
  message: '',
  feedbackType: '',
  fingerprint: '',
  apiKey: '',
  currentPage: ''
}

const state = reactive<Storestate>({ ...initalState })

export function setCurrentComponet (component: string): void {
  state.currentComponent = component
}

export function setMessage (message: string): void {
  state.message = message
}
export function setFeedbackType (type: string): void {
  state.feedbackType = type
}

export function setCurrentPage (page: string): void {
  state.currentPage = page
}

export function setApiKey (apiKey: string): void {
  state.apiKey = apiKey
}

export function setFingerprint (fingerprint: string): void {
  state.fingerprint = fingerprint
}

export function resetStore (): void {
  setCurrentComponet(initalState.currentComponent)
  setMessage(initalState.message)
  setFeedbackType(initalState.feedbackType)
  setCurrentPage(initalState.currentPage)
  setApiKey(initalState.apiKey)
  setFingerprint(initalState.fingerprint)
}

export default readonly(state)
