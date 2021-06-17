const validator = require('validator');
const $http = require('./$http.js')
const $dynamicdata = require('./$http')



module.exports = {

    get: function (req, res, next) {
        console.log(req.params.id);

        $http.metadata.get(`/${req.params.id}`).then(resp => {

            console.log(resp.data);
            res.setHeader('Content-Type', 'application/json');
            res.json({
                name: `${req.params.id}`,
                value: `${resp.data}`
            });

        }).catch(error => {

            console.log(error);
            res.status(error.response.status)
            res.set(error.response.headers)
            res.send(error.response.data)
        })



    },
    getAll: function (req, res, next) {

        $http.metadata.get(`/`).then(resp => {

            console.log(resp.data);
            res.setHeader('Content-Type', 'application/json');
            res.json({ availableParameters: resp.data.replace(/\n/g, " ,") });

        }).catch(error => {

            console.log(error);
            res.status(error.response.status)
            res.set(error.response.headers)
            res.send(error.response.data)
        })

    },
    dynamicdata: function (req, res, next) {
        console.log(req.params)

        var url = `/`
        if (req.params.id) {
            url = url + req.params.id
        }


        $http.dynamicdata.get(url).then(resp => {

            console.log(resp.data);
            res.setHeader('Content-Type', 'application/json');

            if (req.params.id) {

                res.json({
                    name: `${req.params.id}`,
                    value: JSON.stringify(resp.data)
                });

            } else {
                res.json({ availableParameters: resp.data.replace(/\n/g, " ,") });
            }



        }).catch(error => {

            console.log(error);
            res.status(error.response.status)
            res.set(error.response.headers)
            res.send(error.response.data)
        })
    }

};