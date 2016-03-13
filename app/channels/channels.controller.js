angular.module('angularfireSlackApp')
    .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels)
    {
        var channelsCtrl = this;

        channelsCtrl.profile = profile;
        channelsCtrl.channels = channels;
        channelsCtrl.getDisplayName = Users.getDisplayName;
        channelsCtrl.getGravatar = Users.getGravatar;

        channelsCtrl.logout = function()
        {
            Auth.$unauth();
            $state.go('home');
        }

        channelsCtrl.newChannel =
        {
            name: ''
        };

        channelsTrl.createChannel = function()
        {
            channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function() {
                name: ''
            };
        });
    };
});
