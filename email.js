var nodemailer = require("nodemailer");

const smtpTransport = require("nodemailer-smtp-transport");
// var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "zhy1440@gmail.com",
//         pass: "Yue881027"
//     }
// });
var mail_opts = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "zhy1440@gmail.com",
        pass: "Yue881027"
    }
};
var mailOptions = {
    from: "zhy1440@gmail.com",
    to: "zh_14@sina.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!"
};

const transporter = nodemailer.createTransport(smtpTransport(mail_opts));
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
