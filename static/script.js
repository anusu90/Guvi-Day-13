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
    
    let p = new Promise((resolve, reject)=> {
        
        let input = document.createElement('input');
        input.setAttribute('type', 'datetime-local');
        input.setAttribute('style', 'display: block;');
        input.setAttribute('class', 'dt-input');
        subBtn = document.createElement('button');
        subBtn.setAttribute('class', 'btn btn-primary');
        subBtn.innerHTML = 'Submit';
        document.getElementById('display-text').innerHTML = '';
        document.getElementById('display-text').append(input,subBtn);
        
        resolve(input);
        
    })
    

    
    p.then((i)=>{
        
        // dt = Date.parse(i.value)

        subBtn.addEventListener('click', ()=>{

            // dt = Date.parse(i.value);

            dt = new Date(i.value);
            today = new Date()
            
            let miliDiff = today.getTime() - dt
            let secDiff = Math.floor(miliDiff /1000);
            let minDiff = Math.floor(secDiff / 60);
            let dayDiff = Math.floor(miliDiff / (1000* 60 * 60 * 24));
            let yearDiff = today.getFullYear() - dt.getFullYear()
            let monthDiff = yearDiff * 12 + (today.getMonth() - dt.getMonth())
            
            
            let st = `Age Gap is ${miliDiff} in ms, ${secDiff} in seconds, ${minDiff} in minutes, ${dayDiff} in days, ${monthDiff} in months and ${yearDiff} in years`;
            
            document.getElementById('display-text').innerHTML = st;
            console.log(st);
        })
    })

}

randBtn = document.getElementById('random-number');
randBtn.addEventListener('click', displayRandom);

dateBtn = document.getElementById('dob-manipulation');
dateBtn.addEventListener('click', dobMan);