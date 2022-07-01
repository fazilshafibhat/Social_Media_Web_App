const nodeMailer= require('../config/nodemailer')


// another way of exporting a method
exports.newComment= (comment)=> {

let htmlString= nodeMailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs');

    nodeMailer.transporter.sendMail({
       from: 'fazil.bgsbu2016@gmail.com',
       to: comment.user.email,
       subject: "New comment published!",
       html: htmlString
    },(err, info)=>{
        if(err){
            console.log("Error in sending email", err);
            return;
        }
        console.log("Message sent", info);
        return;
    });
}