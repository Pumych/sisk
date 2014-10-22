var db          = require('./models/db.js');

module.exports = function(app,  router){

    /****************************** Page Requests ***************************/
        // Home page (registration/login form)
    router.get('/', function(req, res){
        res.render('main.html', {
            title: "Home page"
        });
    });

    /****************************** AJAX front-end Requests **********/

    router.get('/get_posts', function(req, res){

        db.getPosts(req, res);

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


