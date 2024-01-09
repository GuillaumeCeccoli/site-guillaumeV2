import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const MAILTO = process.env.MAILTO;
const MAILFROM = process.env.MAILFROM;

if(!SENDGRID_API_KEY || !MAILTO || !MAILFROM) {
  throw new Error('Missing environment variables')
}

sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === 'POST'){
        const { name, mail, message} = req.body; 
    const msg = {
        to: MAILTO as string,
        from: MAILFROM as string,
        subject: "Un client potentiel vient de vous contacter",
        text: `Nom: ${name}\Email: ${mail}\Message: ${message}`
    }
    
    try {
        await sgMail.send(msg);
        res.status(200).json({message: "Message envoyé avec succés !"})
    } catch(error){
        res.status(500).json({error: "L'envoi du message n'a pas abouti"})
    } 
    } else {
        res.status(405).json({error: "Methode non approuvée"})
    }
}