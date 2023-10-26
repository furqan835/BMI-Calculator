
function calculateBMI() {
    let Weight = document.getElementById('weight').value
    let HeightFt = document.getElementById('heightft');
    let HeightIn = document.getElementById('heightin');

    const foot = HeightFt.value * 0.3048;

    const inches = HeightIn.value * 0.0254;

    const totalHeight = (foot + inches) + (foot + inches);

    let bmi = (Weight / totalHeight ).toFixed(2);

    document.getElementById('heading').innerHTML = "Your Body Mass Index is :"
    document.getElementById('bmi-output').innerHTML = bmi

    if (bmi <= 24.9) {
    
    document.getElementById('message').innerHTML = 'You are underweight'
    
    } else if (bmi >= 25 && bmi <= 29.9) {
    
    document.getElementById('message').innerHTML = 'You are a healthy weight' 
    } else {
    document.getElementById('message').innerHTML = 'You are overweight'
    }
}