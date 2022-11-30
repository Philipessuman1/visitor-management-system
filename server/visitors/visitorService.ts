import {pool} from '../db';
import qr from 'qrcode';

//move email functionality to host module and imported into the visitor service module
// the addVisitor will also query the database for complete visit details and return an object
// with all the necessary information which will be passed into the email and
// sms functionality

// loginVisitor[addVisitorToDB, sendNotifications[sendMail, sendSMS]]
// logoutVisitor

const generateQR = (body: any) => {
   let stringJson = JSON.stringify(body);
   qr.toFile('qr_code.png', stringJson, (code): any => {
           if (code)
               return console.log(code);
           console.log('An error occured');
       })
}

export const addVisitorToDB = (body: { visitor_name: string; phone: number; email: string; company: string; purpose: string; host_id: number; }) => {
    return pool.query(
        `INSERT INTO visitors (visitor_name, phone, email, company, purpose, host_id)
        VALUES ($1, $2, $3, $4, $5, $6)`, 
        [body.visitor_name, body.phone, body.email, body.company, body.purpose, body.host_id]
    )
    .then(res => {
        generateQR(body)
    })
    .then((res2) => {
        return pool.query(`SELECT * FROM visitors ORDER BY id DESC LIMIT 1`)
    })
    .then(data => {
        return data.rows[0].id
    })
    .catch(err => {
        console.error(err);
        throw {status: err?.status || 500, message: err.message}
    })
}

export const signOutVisitor = (id:number) => {
    return pool.query(`
        UPDATE visitors
        SET sign_out = CLOCK_TIMESTAMP()::TIME(0)
        WHERE id = $1
    `, [id])
        .then((res) => console.log("Sign out successful"))
        .catch(err => {
            throw {status: err?.status || 500, message: err.message}
        })
};