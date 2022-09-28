const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')

const calcButton = document.getElementById('calculate')

const resultInput = document.getElementById('result')

const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

const getWorkingDay = (dayOfTheWeek) => {
    switch (dayOfTheWeek) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "día laborable"
            break;

        default:
            return "fin de semana"
            break;
    }
}

const calculate = () => {
    const dt = new Date(yearInput.value, monthInput.value - 1, dayInput.value)
    const dayOfTheWeek = dt.getDay()
    resultInput.value = `${days[dayOfTheWeek][0].toUpperCase()+days[dayOfTheWeek].slice(1)}, ${getWorkingDay(dayOfTheWeek)}`
}

const validateInputs = event => {
    event.preventDefault()
    yearInput.value && monthInput.value && dayInput.value ? calculate() : alert('verifica los inputs')
}

calcButton.addEventListener("click", validateInputs)