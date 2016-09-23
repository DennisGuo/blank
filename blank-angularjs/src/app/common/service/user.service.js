(function(){
    'use strict';

    angular
        .module('app')
        .service('UserService', UserService)

    /** @ngInject */
    function UserService(){

        var users = [
            {username:'admin',password:'admin',name:'超级管理员',org:'天津总队'}
        ];
        var services = {
            users:users,

            getValidUser:getValidUser,
            getByToken:getByToken
        };

        return services;

        /////
        function getValidUser(unm,pwd,callback){
            for(var i=0;i<users.length;i++){
                var u = users[i];
                if(u.username === unm && u.password === pwd){
                    callback(u);
                    return;
                }
            }
            return callback(null);
        }
        function getByToken(token,callback){
            //TODO:调用真实接口
            callback(users[0]);
        }
    }

}());