const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendgridAPIKey=process.env.SENDGRID_API_KEY;
const sender='thapas@beloit.edu'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:sender,
        subject:'Thanks for joining in!',
        text:`Welcome to the app ${name}. Let me know how you get along with the app.`
    })
}

module.exports={
    sendWelcomeEmail
}
