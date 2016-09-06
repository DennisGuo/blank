package cn.geobeans.web.blank.authority;

import cn.geobeans.web.common.database.UUIDEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/**
 * 用户实体类
 * Created by Guo on 2016/8/31.
 */
@Entity
@Table(name = "BLANK_USER")
@JsonIgnoreProperties(value = {
        "password",
        "createTime",
        "updateTime"
})
public class User extends UUIDEntity{
    //用户名
    @Column(unique = true)
    private String username;
    //密码
    private String password;
    //姓名
    private String name;

    public User() {
    }

    public User(String username, String password, String name) {
        this.username = username;
        this.password = password;
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
