randomDigits = (num) => {
    if (String(num).length === 8){
        return num;
    }

    else {
        let i = Math.floor(Math.random() * 10);
        // console.log(i);
        num = parseInt(String(num) + String(i));
        return randomDigits(num);
    }
}

displayRandom = () => {
    let x = '';
    let y = randomDigits(x);
    displayArea = document.getElementById('display-text')
    displayArea.innerHTML = '';
    displayArea.innerHTML = y;
}

dobMan = () => {
    
    document.getElementById('display-text').innerHTML = '';

    let input = document.createElement('input');
    input.setAttribute('type', 'datetime-local');
    input.setAttribute('style', 'display: block;');
    input.setAttribute('class', 'dt-input');

    subBtn = document.createElement('button')
    subBtn.setAttribute('class', 'btn btn-primary')
    subBtn.innerHTML = 'Submit'
    document.getElementById('display-text').append(input,subBtn);
}

randBtn = document.getElementById('random-number');
randBtn.addEventListener('click', displayRandom);

dateBtn = document.getElementById('dob-manipulation');
dateBtn.addEventListener('click', dobMan);