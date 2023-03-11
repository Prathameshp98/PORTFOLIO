const nameValidator = (name) => {
    if(!name.length){ return '*This Field is Mandatory' }
    if( /\d/.test(name)){ return 'Please Enter a valid name' }
    return ''
}

const emailValidator = (email) => {
    if(!email.length){ return '*This Field is Mandatory' }
    // eslint-disable-next-line no-useless-escape
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){ return 'Please Enter a valid email' }
    return ''
}

const messageValidator = (message) => {
    if(!message.length){ return '*This Field is Mandatory' }
    return ''
}

const validator = {
    nameValidator,
    emailValidator,
    messageValidator
}

export default validator