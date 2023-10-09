const form = document.querySelector('form')

form.addEventListener('submit', function ( event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height=== ""|| isNaN(height)|| height<0) {
        results.innerHTML = `Plase Enter Valid Height ${height}`
        
    } else if (weight=== ""|| isNaN(weight)|| weight<0) {
        results.innerHTML = `Plase Enter a Valid Weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        results.innerHTML= `<span>${bmi}</span>`
        if (bmi<18.6) {
            results.innerHTML= `You are Under Weight: <span>${bmi} </span>`;
            
        } else if (bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML= `You are Weight is Normal: <span>${bmi} </span>`;
        } else {
            results.innerHTML= `You are OverWeight: <span>${bmi}  </span>`;
        }
        }  
})

