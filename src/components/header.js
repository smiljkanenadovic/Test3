import {companyInfo} from '../services'

const header = () => {
    const headDiv = document.createElement('div');
    headDiv.className = 'headHolder';

    companyInfo().then((info) => {
        let p = document.createElement('p');
        info = info.data;

        let {name, founder, founded} = info;
        const title = document.createElement('h1');
        title.innerHTML = name;
        p.innerHTML = `Osnivac kompanije je: ${founder} <br>Godina osnivanja je: ${founded}<br>`;
        headDiv.append(title, p);
    });
    return headDiv;
}

export default header;

