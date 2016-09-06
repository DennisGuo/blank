package cn.geobeans.web.common.web;

/**
 * 错误异常类
 * Created by Guo on 2016/9/2.
 */
public class CustomException extends Exception{
    //错误码
    private String code;

    CustomException(String message, String code) {
        super(message);
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}