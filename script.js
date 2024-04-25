const fifteen = document.querySelector('.tip-amount-15');
const five = document.querySelector('.tip-amount-5')
const twentyFive = document.querySelector('.tip-amount-25')
const ten = document.querySelector('.tip-amount-10')
const fifty = document.querySelector('.tip-amount-50')
const billAmount = document.querySelector('#bill-amount');
const numPeople = document.querySelector('#number-people');
const tipAmount = document.querySelector('#tip-id');
const tipTotal = document.querySelector('#tip-add');
const custom = document.querySelector('#custom')
const failureState = document.querySelector('.invalid')
const reset = document.querySelector('#reset-btn')





function calculateTip(percent) {
    let billVal = Number(billAmount.value);
    let numPeopleVal = Number(numPeople.value);


    if (numPeopleVal !== 0) {
        let totalPerPerson = ((billVal * percent + billVal) / numPeopleVal)
        tipTotal.textContent = `$` + (Math.round(totalPerPerson * 100) / 100)
        let num = (billVal * percent / numPeopleVal);
        num = num.toString();
        num = num.slice(0, (num.indexOf(".")) + 2 + 1);
        tipAmount.textContent = `$` + (Number(num));
    } else {
        failureState.textContent = "Can't be zero"
        numPeople.style.border = '2px solid #E17457'
        numPeople.style.borderRadius = '5px'
    }

    reset.style.backgroundColor = '#26C2AE'


}



fifteen.addEventListener('click', () => {
    calculateTip(0.15);

})
five.addEventListener('click', () => {
    calculateTip(0.05);
})
ten.addEventListener('click', () => {
    calculateTip(0.1);
})
fifty.addEventListener('click', () => {
    calculateTip(0.5);
})
twentyFive.addEventListener('click', () => {
    calculateTip(0.25);
})


custom.addEventListener('change', () => {
    let customVal = Number(custom.value)
    customVal = customVal / 100;
    calculateTip(customVal)

})

reset.addEventListener('click', () => {
    tipAmount.textContent = '$0.00'
    tipTotal.textContent = '$0.00'

    reset.style.backgroundColor = '#0D686D'

})

reset.style.backgroundColor = '#0D686D'





