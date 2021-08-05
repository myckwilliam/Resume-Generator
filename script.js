const objectiveField = document.getElementById('objectiveField');
const nameField = document.getElementById('nameField');
const phoneField = document.getElementById('phoneField');
const addressField = document.getElementById('addressField');
const facebookField = document.getElementById('facebookField');
const linkedinField = document.getElementById('linkedinField');
const instagramField = document.getElementById('instagramField');
const weField = document.getElementsByClassName('weField');
const aqField = document.getElementsByClassName('aqField');
const nome = document.querySelectorAll('.name');
const phone = document.querySelector('.phone');
const address = document.querySelector('.address');
const facebookLink = document.querySelector('.facebookLink');
const linkedinLink = document.querySelector('.linkedinLink');
const instagramLink = document.querySelector('.instagramLink');
const objectiveText = document.querySelector('.objective-text');
const experiencesList = document.querySelector('.experiences-list');
const qualificationsList = document.querySelector('.qualifications-list');
const prince = document.querySelector('.prince');




const cvForm = document.getElementById('cv-form')

const changeName = () => {
    prince.innerHTML = 'Atualizar Currículo';
}

const atualizar = () => {
    let weOutput = '';
    let aqOutput = '';
    nome.forEach(element => element.innerHTML = nameField.value);
    phone.innerHTML = phoneField.value;
    address.innerHTML = addressField.value;
    facebookLink.innerHTML = `Facebook: ${facebookField.value}`;
    linkedinLink.innerHTML = `Linkedin: ${linkedinField.value}`;
    instagramLink.innerHTML = `Instagram: ${instagramField.value}`;
    objectiveText.innerHTML = objectiveField.value;
    for(element of weField) {weOutput += `<li>${element.value}</li>`}
    for(element of aqField) {aqOutput += `<li>${element.value}</li>`}
    experiencesList.innerHTML = weOutput;
    qualificationsList.innerHTML = aqOutput;
}


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

const print = () => {

    cvForm.style.display = 'none';
    window.print()
}

// PDF GENERATOR


const areaCV = document.getElementById('cv-template');

var opt = {
    margin:       0,
    filename:     'myCV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
};

function generateResume(){
    html2pdf(areaCV, opt)
}

