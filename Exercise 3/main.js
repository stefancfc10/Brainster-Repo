class Message {
    constructor(fromArg, toArg, subjectArg, textArg) {
        this.from = fromArg;
        this.to = toArg;
        this.subject = subjectArg;
        this.text = textArg;
    }
    displayMsg() {
        alert(` From:${this.from}\n To:${this.to}\n Subject:${this.subject}\n Text:${this.text} `)
    }
};

const from = prompt("Enter From:");
const to = prompt("Enter To:");
const subject = prompt("Enter Subject:");
const text = prompt("Enter a Text:");

const mail = new Message(from, to, subject, text);

mail.displayMsg();

const fromInput =document.querySelector("#from");
const toInput =document.querySelector("#to");
const subjectInput =document.querySelector("#subject");
const textInput =document.querySelector("#text");

fromInput.value = `${mail.from}`;
toInput.value = `${mail.to}`;
subjectInput.value = `${mail.subject}`;
textInput.value = `${mail.text}`;