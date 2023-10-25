
function calculateBMI() {
    let Weight = document.getElementById('weight').value
    let Height = document.getElementById('height').value

    let bmi = (Weight / (Height * Height) * 703)

    document.getElementById('heading').innerHTML = "Your Body Mass Index is :"
    document.getElementById('bmi-output').innerHTML = bmi

}