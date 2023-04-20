

let bill = document.querySelector("#bill")
let bill_value = 0.00
let custom = document.querySelector("#custom")
let custom_value = 0.00
let number_of_people = document.querySelector("#number_of_people")
let number_of_people_value = 0.00
let tip_amount_per_person = document.querySelector("#tip_amount_per_person")
let tip_amount_per_person_text = ""
let total_per_person = document.querySelector("#total_per_person")
let total_per_person_text = ""
let tip_ratio = 0.00
let zero_alert = document.querySelector("#zero_alert")
let tr5 = document.querySelector("#tr5")
let tr10 = document.querySelector("#tr10")
let tr15 = document.querySelector("#tr15")
let tr25 = document.querySelector("#tr25")
let tr50 = document.querySelector("#tr50")
let reset_button = document.querySelector("#reset")

zero_alert.style.display = "none"



bill.addEventListener("input", (event)=>{
    bill_value = Number(event.target.value)
    if(tip_ratio !== 0.00 && number_of_people_value !== 0.00) {
        tip_amount_per_person_text = (bill_value * tip_ratio) / number_of_people_value
        total_per_person_text = (bill_value / number_of_people_value) + tip_amount_per_person_text
        tip_amount_per_person.textContent = tip_amount_per_person_text
        total_per_person.textContent = total_per_person_text
    }
})

custom.addEventListener("click", (event) => {
    tr5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr50.style.backgroundColor = "hsl(183, 100%, 15%)"
})

custom.addEventListener("input", (event)=>{
    custom_value = Number(event.target.value)
    if (custom_value !== 0.00) {
        tip_ratio = custom_value / 100
        if(number_of_people_value !== 0.00 && bill_value !== 0.00) {
            tip_amount_per_person_text = (bill_value * tip_ratio) / number_of_people_value
            total_per_person_text = (bill_value / number_of_people_value) + tip_amount_per_person_text
            tip_amount_per_person.textContent = tip_amount_per_person_text
            total_per_person.textContent = total_per_person_text
        }
    } else {
        tip_amount_per_person.textContent = "0.00"
        total_per_person.textContent = "0.00"
    }
})


number_of_people.addEventListener("input", (event)=>{
    number_of_people_value = Number(event.target.value)
    if (number_of_people_value == 0.00) {
        tip_amount_per_person.textContent = "0.00"
        total_per_person.textContent = "0.00"
        zero_alert.style.display = "block"
    } else {
            zero_alert.style.display = "none"
    }
    if(number_of_people_value !==0.00 && tip_ratio !==0.00) {
        tip_amount_per_person_text = (bill_value * tip_ratio) / number_of_people_value
        total_per_person_text = (bill_value / number_of_people_value) + tip_amount_per_person_text
        tip_amount_per_person.textContent = tip_amount_per_person_text
        total_per_person.textContent = total_per_person_text
    }
})

tr5.addEventListener("click", (event) => {
    tr5.style.backgroundColor = "hsl(172, 67%, 45%)"
    tr10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr50.style.backgroundColor = "hsl(183, 100%, 15%)"
    event.preventDefault()
    custom.value = ""
    tip_ratio = 5/100
    if (bill_value !== 0.00 && number_of_people_value !==0.00) {
        tip_amount_per_person_text = (bill_value * tip_ratio) / number_of_people_value
        total_per_person_text = (bill_value / number_of_people_value) + tip_amount_per_person_text
        tip_amount_per_person.textContent = tip_amount_per_person_text
        total_per_person.textContent = total_per_person_text
    }
})

tr10.addEventListener("click", (event) => {
    tr10.style.backgroundColor = "hsl(172, 67%, 45%)"
    tr5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr50.style.backgroundColor = "hsl(183, 100%, 15%)"
    event.preventDefault()
    custom.value = ""
    tip_ratio = 10/100
    if (bill_value !== 0.00 && number_of_people_value !==0.00) {
        tip_amount_per_person_text = (bill_value * tip_ratio) / number_of_people_value
        total_per_person_text = (bill_value / number_of_people_value) + tip_amount_per_person_text
        tip_amount_per_person.textContent = tip_amount_per_person_text
        total_per_person.textContent = total_per_person_text
    }
})

tr15.addEventListener("click", (event) => {
    tr15.style.backgroundColor = "hsl(172, 67%, 45%)"
    tr10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr50.style.backgroundColor = "hsl(183, 100%, 15%)"
    event.preventDefault()
    custom.value = ""
    tip_ratio = 15/100
    if (bill_value !== 0.00 && number_of_people_value !==0.00) {
        tip_amount_per_person_text = (bill_value * tip_ratio) / number_of_people_value
        total_per_person_text = (bill_value / number_of_people_value) + tip_amount_per_person_text
        tip_amount_per_person.textContent = tip_amount_per_person_text
        total_per_person.textContent = total_per_person_text
    }
})

tr25.addEventListener("click", (event) => {
    tr25.style.backgroundColor = "hsl(172, 67%, 45%)"
    tr10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr50.style.backgroundColor = "hsl(183, 100%, 15%)"
    event.preventDefault()
    custom.value = ""
    tip_ratio = 25/100
    if (bill_value !== 0.00 && number_of_people_value !==0.00) {
        tip_amount_per_person_text = (bill_value * tip_ratio) / number_of_people_value
        total_per_person_text = (bill_value / number_of_people_value) + tip_amount_per_person_text
        tip_amount_per_person.textContent = tip_amount_per_person_text
        total_per_person.textContent = total_per_person_text
    }
})

tr50.addEventListener("click", (event) => {
    tr50.style.backgroundColor = "hsl(172, 67%, 45%)"
    tr10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr5.style.backgroundColor = "hsl(183, 100%, 15%)"
    event.preventDefault()
    custom.value = ""
    tip_ratio = 50/100
    if (bill_value !== 0.00 && number_of_people_value !==0.00) {
        tip_amount_per_person_text = (bill_value * tip_ratio) / number_of_people_value
        total_per_person_text = (bill_value / number_of_people_value) + tip_amount_per_person_text
        tip_amount_per_person.textContent = tip_amount_per_person_text
        total_per_person.textContent = total_per_person_text
    }
})


reset_button.addEventListener("click", (event)=>{
    event.preventDefault()
    bill.value = ""
    bill_value = 0.00
    custom.value = ""
    custom_value = 0.00
    number_of_people.value = ""
    number_of_people_value = 0.00
    tip_amount_per_person.textContent = "0.00"
    total_per_person.textContent = "0.00"
    tr5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tr50.style.backgroundColor = "hsl(183, 100%, 15%)"
})