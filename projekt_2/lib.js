function sendMail(body){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "popdominik@seznam.cz",
        Password : "4EC2D336F5C6199CBEF0F3BF68B33348B031",
        To : 'popdominik@seznam.cz',
        From : 'popdominik@seznam.cz',
        Subject : 'Mail from online CV',
        Body : body
    });
}