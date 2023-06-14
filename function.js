window.function = function (body_input) {

// const glideamount = in_amount.value;
// const gliderecip = String(in_recip.value) ?? "";
const body = String(body_input.value) ?? "";

const secret = 'UPfmEVdtD4orLswnnNtc3gM1bgDOnOpynj2ApFNgfxxGM41BVkehZb1B4iCKTS6M4PJ23HUUCuAxVcgrPssmiFQUEQQd5Cky39jOcuXgiqDbhGKAtd5C8Pd2U0xEYi9H7kLzELYv7JF46eV9H7guvaeEvRD4JAvMTkFZdqT4nHXlUIXsbmqM43VePAURww4MDirU0Q07qMdby8TCHQhc6OLUb77HMtvJ5vVm4ELljW0OP5FjdioZAK9BSUyMb2o4';
// const data = {
//   currencyID: 3,
//   amount: glideamount,
//   recipientTypeID: 1,
//   recipient: `${glideorder}`,
//   clientOrderID: `${gliderecip}`,
//   webhookURL: 'https://webhook.site/6c2fa6fa-ec9f-47ca-a2c2-18505a6dec9b'
// };
// const data = {
//   amount: glideamount,
//   currencyID: 3,
//   typeID: 4,
//   clientOrderID: gliderecip,
//   TTL: 999,
//   webhookURL: "https://webhook.site/c7e3b35d-3e0b-42e7-a46b-e51b98e865c4",
//   extra: {
//     comment: "KrossBeri",
//     allowedPaymentTypeIDs: [
//       3
//     ],
//     allowedPaymentSystemIDs: [
//       1,
//       2
//     ],
//     allowedCardIssuerIDs: [
//       1,
//       2,
//       3,
//       4,
//       5,
//       6,
//       7,
//       8
//     ],
//     failedRedirectURL: "https://krossberi.glide.page/dl/failure",
//     successRedirectURL: "https://krossberi.glide.page/dl/success"
//   }
// }

//const raw = JSON.stringify(body_input);
const hash = CryptoJS.HmacSHA512(body, secret).toString();

return hash;

}
