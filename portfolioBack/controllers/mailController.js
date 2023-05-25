const { request, response } = require('express');
const nodemailer = require('nodemailer');


const sendMail = (req = request, res = response) => {
    const { name, email, mobile, subject, message } = req.body;

    let config = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        auth: {
            user: 'pskdj1@gmail.com',
            pass: 'ddtt xvby pwfo dnqm'
        }
    });


    const opciones = {
        from: email,
        subject: subject,
        to: 'pskdj1@gmail.com',
        text: `Mensaje: ${message}\n\nNombre: ${name}\nEmail: ${email}\nNúmero de teléfono: ${mobile}`,
        name: name,
        mobile: mobile
    }

    config.sendMail(opciones, function (error, result) {

        if (error) return res.json({ ok: false, msg: error });

        return res.json({
            ok: true,
            msg: result
        })
    })
}

module.exports = { sendMail }