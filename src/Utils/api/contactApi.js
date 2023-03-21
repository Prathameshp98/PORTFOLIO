import axios from 'axios'

const postUser = async(name, email, message) => {

    const data = {
        name: name,
        email: email,
        message: message
    }

    return await axios({
        method: "POST",
        url: "https://portfolioapp-prathameshpatil2812.b4a.run/users/create-user",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data)
    })
    .then(result => {
        return result
    })
    .catch(err => {
        return err
    })

}

const contactApi = {
    postUser
}

export default contactApi