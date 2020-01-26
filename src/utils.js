export function isValid(value) {
    return value.length > 9 && value.length < 257
}

export function createModal(title, content) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = `
        <h1>${title}</h1>
        <br>
        <p class='modal-content'>${content}</p>
    `
    mui.overlay('on', modal)
}
