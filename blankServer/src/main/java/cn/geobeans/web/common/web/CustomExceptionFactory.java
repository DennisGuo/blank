package cn.geobeans.web.common.web;

/**
 * Token 异常工厂类
 * Created by Guo on 2016/9/2.
 */
public class CustomExceptionFactory {

    /**
     * 工厂模式：用户异常：返回一个用户密码错误异常
     * @return 用户异常
     */
    public static Exception createInvalidUserPasswordException() {
        return new CustomException("Invalid username or password.","200000");
    }

    /**
     * 工厂模式：TOKEN异常：返回一个TOKEN异常
     * @return TOKEN异常
     */
    public static CustomException createTokenExpectedException(){
        return new CustomException("Token is expected.","100000");
    }

    /**
     * 工厂模式：TOKEN异常：返回一个无效TOKEN异常
     * @return TOKEN异常
     */
    public static Exception createTokenInvalidException() {
        return new CustomException("Token is invalid.","100001");
    }
    /**
     * 工厂模式：TOKEN异常：返回一个过期TOKEN异常
     * @return TOKEN异常
     */
    public static Exception createTokenExpiredException() {
        return new CustomException("Token is invalid.","100002");
    }
    /**
     * 工厂模式：TOKEN异常：返回一个IP错误TOKEN异常
     * @return TOKEN异常
     */
    public static Exception createTokenWrongIpException() {
        return new CustomException("The token does not match the request IP.","100003");
    }


    /*******************************************
                     内 部 类
    *******************************************/



}
