const tapQRCodeURL = 'https://ddxc7vq5cjhdfqt4af6xiiiyga0smmxh.lambda-url.us-west-1.on.aws/'

fetch(tapQRCodeURL)
    .then(response => response.json())
    .then(data => {
        let qrCode = data.code
        console.log(qrCode);

        // get url param 'size' if it exists
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sizeParam = urlParams.get('size');
        console.log(sizeParam);

        if (sizeParam != null) {
            let canvas = bwipjs.toCanvas('aztecCode', {
                bcid:        'azteccode',       // Barcode type
                text:        qrCode,    // Text to encode
                scale:       3,               // 3x scaling factor
                height:      sizeParam,              // Bar height, in millimeters
                width:       sizeParam,
                includetext: true,            // Show human-readable text
                textxalign:  'center',        // Always good to set this
            });
        } else {
            // default size is 256x256
            let canvas = bwipjs.toCanvas('aztecCode', {
                bcid:        'azteccode',       // Barcode type
                text:        qrCode,    // Text to encode
                scale:       3,               // 3x scaling factor
                includetext: true,            // Show human-readable text
                textxalign:  'center',        // Always good to set this
            });
        }
        
        

    })
    .catch(error => {
        console.error(error);
    });


