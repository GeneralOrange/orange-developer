const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, subject, message, to_adres } = req.body

  const content = {
    to: to_adres,
    from: `ContactForm OrangeDeveloper.nl <noreply@orange-developer.nl>`,
    subject: `${name} zoekt contact over: ${subject}`,
    text: message,
    html: `<p>
        Erik je hebt weer een berichtje van je website binnen!

        Ik heb het hier allemaal voor je op een rijtje gezet<br/><br/>
        <table>
            <tr><td>Onderwerp:</td><td>${subject}</td></tr>
            <tr><td>Email:</td><td>${email}</td></tr>
            <tr><td>Naam:</td><td>${name}</td></tr>
            <tr><td>Bericht:</td><td>${message}</td></tr>
        </table>
    </p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Bericht succesvol verstuurd.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Er is een probleem met het versturen van uw bericht.')
  }
}