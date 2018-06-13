/**
 *
 * @Description 邮件发送
 * 调用方法:sendMail('amor_zhang@qq.com','这是测试邮件', 'Hi Amor,这是一封测试邮件');
 * @Author Amor
 * @Created 2016/04/26 15:10
 * 技术只是解决问题的选择,而不是解决问题的根本...
 * 我是Amor,为发骚而生!
 *
 */

var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var config = require("./config");

smtpTransport = nodemailer.createTransport(
    smtpTransport({
        service: config.email.service,
        auth: {
            user: config.email.user,
            pass: config.email.pass
        }
    })
);

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function(recipient, subject, html) {
    smtpTransport.sendMail(
        {
            from: config.email.user,
            to: recipient,
            subject: subject,
            html: html,
            attachments: [
                // // String attachment
                // {
                //     filename: "notes.txt",
                //     content: "Some notes about this e-mail",
                //     contentType: "text/plain" // optional,would be detected from the filename 可选的，会检测文件名
                // },
                // // Binary Buffer attchment
                // {
                //     filename: "image.png",
                //     content: Buffer.from(
                //         "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/" +
                //             "//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U" +
                //             "g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC",
                //         "base64"
                //     ),
                //     cid: "00001" // should be as unique as possible 尽可能唯一
                // },
                // File Stream attachment
                {
                    filename: "nyan cat 1.gif",
                    path: __dirname + "/photo/1.jpg",
                    cid: "00001" // should be as unique as possible 尽可能唯一
                },
                {
                    filename: "nyan cat 2.gif",
                    path: __dirname + "/photo/2.jpg",
                    cid: "00002" // should be as unique as possible 尽可能唯一
                },
                {
                    filename: "nyan cat 3.gif",
                    path: __dirname + "/photo/3.jpg",
                    cid: "00003" // should be as unique as possible 尽可能唯一
                },
                {
                    filename: "nyan cat 4.gif",
                    path: __dirname + "/photo/4.jpg",
                    cid: "00004" // should be as unique as possible 尽可能唯一
                },
                {
                    filename: "nyan cat 5.gif",
                    path: __dirname + "/photo/5.jpg",
                    cid: "00005" // should be as unique as possible 尽可能唯一
                },
                {
                    filename: "nyan cat 6.gif",
                    path: __dirname + "/photo/6.jpeg",
                    cid: "00006" // should be as unique as possible 尽可能唯一
                },
                {
                    filename: "nyan cat 7.gif",
                    path: __dirname + "/photo/7.jpeg",
                    cid: "00007" // should be as unique as possible 尽可能唯一
                }
            ]
        },
        function(error, response) {
            if (error) {
                console.log(error);
            } else {
                console.log("发送成功");
            }
        }
    );
};

module.exports = sendMail;
