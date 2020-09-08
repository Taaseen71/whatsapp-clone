const Pusher = require('pusher');

let pusher = new Pusher({
    appId: '1069387',
    key: '446a5868e105ded7d86d',
    secret: 'ca30799e8e6924898b22',
    cluster: 'us2',
    encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
    'message': 'hello world'
});