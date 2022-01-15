const Express = require('express');
const bodyParser = require('body-parser');
const App = Express();
const Cors = require('cors');
const Mail = require('nodemailer');
let logger = args => console.log('[INFO]',args);

//Configurations
App.use(Cors());
App.use(bodyParser.json());
App.listen("3000",()=> logger("Application started on http://localhost:3000"))
//-------------

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
    from: `"${mail.name}" <${mail.email}>`, // sender address
    to: "arthurninda@gmail.com", // list of receivers
    subject: "Portfolio", // Subject line
    html: `<b>${mail.message}</b>` // html body
});


App.post("/send",(request,response)=>{
    send(request.body)
    .then(()=>response.send({Mail: 'sent successfuly'}))
    .catch(()=>response.send({Mail: 'not sent'}));
});