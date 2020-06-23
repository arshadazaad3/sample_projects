package com.react_spring.react_spring;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;
@RestController
public class EmailSender {

    @RequestMapping("/getWithRequestParam")
    public String getWithRequestParam(@RequestParam(value = "email") String email) {

        String subject = "THIS IS A TEST MESSAGE";
        String message = "This message proves the connectivity of react and spring, done by ahsan ilyas";
        System.out.println(email);
        EmailSender.send("spotonsdgp@gmail.com", "sdgp1234", email, subject, message);
        return "Successfully Recieved";
    }

    public static void send(String from, String password, String to, String sub, String msg) {
        //Get properties object
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class",
                "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");
        //get Session
        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(from, password);
                    }
                });
        //compose message
        try {
            MimeMessage message = new MimeMessage(session);
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject(sub);
            message.setText(msg);
            //send message
            Transport.send(message);
            System.out.println("Email sent successfully");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }

    }

}
