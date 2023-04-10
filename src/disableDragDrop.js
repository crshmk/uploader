//  Disable default browser functionality that displays a file in a new tab on drop
const events = ['dragend', 'dragexit', 'dragleave', 'dragover', 'drop']

const preventDefault = e => e.preventDefault()

const disableEvent = event => window.addEventListener(event, preventDefault) 

const enableEvent = event => window.removeEventListener(event, preventDefault) 

export const disableDragDrop = () => events.forEach(disableEvent)

export const enableDragDrop = () => events.forEach(enableEvent)

