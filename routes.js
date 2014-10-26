var posts          = require('./model/posts.js');
var users          = require('./model/users.js');

module.exports = function(app,  router){

    /****************************** GET ***************************/
        // Home page (registration/login form)
    router.get('/', function(req, res){
        res.render('main.html', {
            title: "Home page"
        });
    });

    router.get('/add_post', function(req, res){
        res.render('add_post.html');
    });

    /****************************** AJAX front-end Requests **********/

    router.post('/add_post', function(req, res){
        posts.addPost(req, res);
    });


    /**This would be the last router, if no page/file found return 404 */
    router.get('*', function(req, res){
        res.render('404.html', {
            css_path: "/styles/styles.css",
            title: "404 page",
            text: "Обана, 404 на!"
        });
    });
}


