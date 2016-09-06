package cn.geobeans.web.common.web;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Date;

/**
 * Token实体类
 * Created by Guo on 2016/9/2.
 */
public class Token implements Serializable {

    //token内容
    private String token;
    //token 有效期,单位秒,7200秒 = 120 分 = 2 小时
    private long expired = 7200;
    //绑定的客户端IP
    private String ip;
    //token携带的其他信息
    @JsonIgnore
    private Object data;
    //创建时间
    private Date time = new Date();

    public Token() {
    }

    public Token(String key, String ip) {
        this.token = key;
        this.ip = ip;
    }
    public Token(String key, String ip, Object data) {
        this.token = key;
        this.ip = ip;
        this.data = data;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public long getExpired() {
        return expired;
    }

    public void setExpired(long expired) {
        this.expired = expired;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
