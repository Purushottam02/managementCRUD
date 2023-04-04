// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "abc123@gmail.com",
//     pass: "Puru*123",
//   },
// });
// import crypto from "crypto";
// const generateOTP = () => {
//   const OTP = crypto.randomInt(100000, 999999);
//   return OTP.toString();
// };

// const OTP = generateOTP();
// const emailMessage = {
//     from: "abc123@gmail.com",
//     to: "gandasp18@gmail.com",
//     subject: "OTP for opening account",
//     text: `Your OTP is ${OTP}`,
//   };
  
//   transporter.sendMail(emailMessage, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(`Email sent: ${info.response}`);
//     }
//   });
  