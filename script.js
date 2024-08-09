let dobOpen = false;
let dateOfBirth;
const settingIcon = document.querySelector("#settingIcon");
const settingContent = document.querySelector("#settingContent");
const dobInput = document.querySelector("#dobInput");
const dobBtn = document.querySelector("#dobButton");
const initialTxt =document.querySelector("#initialText");
const finalTxt = document.querySelector("#finalText");
const yearEl = document.querySelector("#year");
const monthEl = document.querySelector("#month");
const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

const settingCheck = () => {
    if(dobOpen) {
        settingContent.classList.add("hide");
    }
    else {
        settingContent.classList.remove("hide");
    }
    dobOpen = !dobOpen;

}

const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / 1000) % 60;

    yearEl.innerText = year;
    monthEl.innerText = month;
    dayEl.innerText = day;
    hourEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;

}

const dobHandler = () => {
    let dateString = dobInput.value;
    dateOfBirth = new Date(dateString);

    setInterval(()=>updateAge(),1000);
    clickBtn();
}

const clickBtn = () => {
    updateAge();
    if(dobBtn) {
        initialTxt.classList.add("hide");
        finalTxt.classList.remove("hide");
    }
    else {
        initialTxt.classList.remove("hide");
        finalTxt.classList.add("hide");
    }
}

settingIcon.addEventListener("click",settingCheck);
dobBtn.addEventListener("click",dobHandler);


