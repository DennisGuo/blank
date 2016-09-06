package cn.geobeans.web.common.web;

import java.io.Serializable;

/**
 * 返回结果类
 * Created by ice on 2015/11/28.
 */
public class CustomResponse implements Serializable {

    /**
     * 状态
     */
    private String status = Status.SUCCESS.toString();

    /**
     * 消息
     */
    private String message = "";

    /**
     * 消息错误码
     */
    private String code = "";

    /**
     * 数据
     */
    private Object data = null;

    public CustomResponse() {
    }

    public CustomResponse(Object data) {
        this.data = data;
    }

    public CustomResponse(Status status, String message) {
        this.status = status.toString();
        this.message = message;
    }

    public CustomResponse(Status status, String message, String code) {
        this.status = status.toString();
        this.message = message;
        this.code = code;
    }


    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    /**
     * 返回消息状态枚举
     */
    public enum Status {
        SUCCESS("success"),
        ERROR("error");

        private String text;

        Status(String txt) {
            this.text = txt;
        }

        @Override
        public String toString() {
            return this.text;
        }
    }

}
