const addNewWEField = () => {
    const newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', 'Insira uma nova experiência...')

    const weOb = document.getElementById('we')
    const weAddButtonOb = document.getElementById('weAddButton')

    weOb.insertBefore(newNode, weAddButtonOb)
}

const addNewAQField = () => {
    const newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', 'Insira uma nova qualificação...')

    const aqOb = document.getElementById('aq')
    const aqAddButtonOb = document.getElementById('aqAddButton')

    aqOb.insertBefore(newNode, aqAddButtonOb)
}