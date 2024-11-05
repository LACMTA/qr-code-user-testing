const tapQRCodeURL = 'https://ddxc7vq5cjhdfqt4af6xiiiyga0smmxh.lambda-url.us-west-1.on.aws/'

fetch(tapQRCodeURL)
    .then(response => response.json())
    .then(data => {
        let qrCode = data.code
        console.log(qrCode);

        new QRCode(document.getElementById("qrcode"), {
            text: qrCode
        });
    })
    .catch(error => {
        console.error(error);
    });


