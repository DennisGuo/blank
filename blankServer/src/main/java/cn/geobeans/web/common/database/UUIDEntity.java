package cn.geobeans.web.common.database;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.util.Date;

/**
 * 通用的UUID，实体父类
 * Created by Guo on 2016/8/31.
 */
@MappedSuperclass
public class UUIDEntity implements Serializable{

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator( name="uuid", strategy = "uuid")
    private String id;
    /**
     * 创建时间
     */
    @Column(name = "create_time")
    @CreationTimestamp
    private Date createTime;
    /**
     * 更新时间
     */
    @Column(name = "update_time")
    @UpdateTimestamp
    private Date updateTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}
