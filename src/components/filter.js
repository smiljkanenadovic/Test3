const selector = () => {
    let divSel = document.createElement('div');
    let selector = document.createElement('select');
    let optionT = document.createElement('option');

    optionT.value = 'All';
    optionT.innerHTML = 'All';
    selector.appendChild(optionT);

    let optionO = document.createElement('option');
    optionO.value = 'Active'
    optionO.innerHTML = 'Active'
    selector.appendChild(optionO);

    let option2 = document.createElement('option');
    option2.value = 'Inactive';
    option2.innerHTML = 'Inactive';
    selector.appendChild(option2);

    divSel.appendChild(selector);

    return selector
}

export default selector;