const App = require('express')();
const Cors = require('cors');
const Mail = require('nodemailer');
let logger = args => console.log('[INFO]',args);
App.listen("3000",()=> logger("Application started on http://localhost:3000"))

const transport = Mail.createTransport({
    host: "smtp.elasticemail.com",
    port: 2525,
    secure: false, 
    auth: {
        user: "arthurninda@gmail.com",
        pass: "EEDD27EEB4E30BC7A941F5E931FE1507D779",
    } 
});
const send = (mail ={
    from: 'arthurninda@gmail.com',
    name:'Arthur Nindaba',
    message:'Hello Arthur'
}) => transport.sendMail({
    from: `"${mail.name}" <${mail.from}>`, // sender address
    to: "arthurninda@gmail.com", // list of receivers
    subject: "Portfolio", // Subject line
    html: `<b>${mail.message}</b>` // html body
})
.then(logger)
.catch(logger);

App.C
App.post("/send",Cors('+'),(request,response)=>{
    send(request.body);
    response.send("OK");
});