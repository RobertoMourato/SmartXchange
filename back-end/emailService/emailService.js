var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "4ce38048cf0094",
        pass: "2231b507a9f3e9"
    }
});

var mailOptions = {
    from: 'from@example.com',
    subject: 'Join SmartXChange Now!',
};

exports.sendManagerInvite = function (req, invite) {


    mailOptions.text = 'Welcome!\nYou have been invited to be a manager for SmartXchange. From now on you can invite players yourself and create/control competitions at your desire!\nJoin here:'
    mailOptions.to = req.body.email;

    // url for invite must be in request
    mailOptions.text = mailOptions.text.concat('www.invite.pt$invite=', invite);

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return 400;
            return res.status(400).send("Error! Something went wrong with the invitation!");
        }

        console.log('Email sent: ' + info.response);

    });
    return 200;
    return res.status(200).send("Invite was sent succesfully!")
};


exports.sendPlayerInvite = async function (req, invite) {

    mailOptions.text = 'Welcome!\nYou have been invited to play SmartXchange. Join the session before it starts!\nYou can start here:'
    mailOptions.to = req.body.email;

    // url for invite must be in request, AINDA FALTA FAZER O ID COM GUUID
    mailOptions.text = mailOptions.text.concat('www.invite.pt$invite=', invite);

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            //res.send("Error! Something went wrong with the invitation!");
            return 400;
        }
        console.log('Email sent: ' + info.response);

        // res.json("Invite was sent succesfully!")

    });
    return 200;
};
