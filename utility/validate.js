const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const phone = /^[0-9]{8}$/

export const validateContact = (string) => {
    if (email.test(string)) return "E"
    if (phone.test(string)) return 'P'
    return;
}

