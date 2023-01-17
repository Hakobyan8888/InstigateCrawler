const facebookInformationService = require('../Services/facebookInformationService')


module.exports = class facebookInformationController {
    static apiGetAllUserPosts(req, res) {
        try {
            let userToken = req.query.access_token;
            let userId = req.query.userId;
            facebookInformationService.getAllPosts(userId, userToken,
                function (json) {
                    console.log(json);
                    res.setHeader('Content-Type', 'application/json');
                    res.json(json);
                });
        }
        catch (error) {

        }
    }
}