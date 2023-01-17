var request = require('request');
const FACEBOOK_BASE_URI = 'https://graph.facebook.com/'



module.exports = class facebookInformationService {


    static getAllPosts(userId, userToken, res) {
        try {
            this.requestFacebookUserPosts(userId, userToken, res);
        } catch (error) {
            console.log(`Could not fetch articles ${error}`)
        }
    }

    static requestFacebookUserPosts(userId, userToken, res) {
        let params = `?fields=id,name,message,story,created_time,link,description,caption,attachments{media,type,subattachments}&limit=100&access_token=${userToken}&format=json`;
        let uri = FACEBOOK_BASE_URI + userId + '/feed' + params
        request({
            uri: uri
        },
            function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log(JSON.parse(body));
                    res(JSON.parse(body));
                } else {
                    res(error);
                }
            });

    }
}