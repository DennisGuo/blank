package cn.geobeans.web.common.web;

import java.io.Serializable;

/**
 * 返回结果类
 * Created by ice on 2015/11/28.
 */
public class JsonResponse implements Serializable {

    /**
     * 状态
     */
    private String status = Status.SUCCESS.toString();

    /**
     * 消息
     */
    private String message = "";

    /**
     * 数据
     */
    private Object data = null;

    public JsonResponse() {
    }

    public JsonResponse(Object data) {
        this.data = data;
    }

    public JsonResponse(Status status, String message) {
        this.status = status.toString();
        this.message = message;
    }

    public JsonResponse(Status status, String message, Object data) {
        this.status = status.toString();
        this.message = message;
        this.data = data;
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
