const inputBody = {
    "client_id": "daf19ebd-efd2-4c5f-b676-df59c6ed7451",
    "client_secret": "daf19ebd-efd2-4c5f-b676-df59c6ed7451",
    "grant_type": "client_credentials"
};
const headers = {
'Content-Type':'application/json',
'Accept':'*/*'
};

fetch('https://openapiuat.airtel.africa/auth/oauth2/token',
{
method: 'POST',
body: inputBody,
headers: headers
})
.then(function(res) {
  return res.json();
}).then(function(body) {
  console.log(body);
});

  