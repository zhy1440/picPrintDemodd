var nodemailer = require("nodemailer");

const smtpTransport = require("nodemailer-smtp-transport");
// var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "zhy1440@gmail.com",
//         pass: "Yue881027"
//     }
// });
// var mail_opts = {
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "zhy1440@gmail.com",
//         pass: "Yue881027"
//     }
// };
var mail_opts = {
    host: "smtp.qq.com",
    port: 465,
    secure: true,
    auth: {
        user: "41163868@qq.com",
        pass: "wrebeivmngumbgbb"
    }
};
var mailOptions = {
    // from: "zhy1440@gmail.com",
    from: "41163868@qq.com",
    to: "zh_14@sina.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
    attachments: [
        // String attachment
        {
            filename: "notes.txt",
            content: "Some notes about this e-mail",
            contentType: "text/plain" // optional,would be detected from the filename 可选的，会检测文件名
        },
        // Binary Buffer attchment
        {
            filename: "image.png",
            content: Buffer.from(
                "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/" +
                    "//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U" +
                    "g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC",
                "base64"
            ),
            cid: "00001" // should be as unique as possible 尽可能唯一
        },
        // File Stream attachment
        {
            filename: "nyan cat.gif",
            path: __dirname + "/appData/nyan.gif",
            cid: "00002" // should be as unique as possible 尽可能唯一
        }
    ]
};

const transporter = nodemailer.createTransport(smtpTransport(mail_opts));
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
