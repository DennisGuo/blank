package cn.geobeans.web.blank.todolist;

import cn.geobeans.web.common.database.UUIDEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 待办事项实体类
 * Created by Guo on 2016/8/31.
 */
@Entity
@Table(name = "BLANK_TODO")
public class Todo extends UUIDEntity {

    /**
     * 待办事项内容
     */
    @Column(length = 1024)
    private String content;
    /**
     * 事项状态
     */
    private TodoStatusEnum status = TodoStatusEnum.UNDO;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public TodoStatusEnum getStatus() {
        return status;
    }

    public void setStatus(TodoStatusEnum status) {
        this.status = status;
    }



    /**************************************
                    内部类
    **************************************/

    /**
     * 事项完成状态
     */
    public enum TodoStatusEnum {
        UNDO,//未办
        FINISH//已完成
    }

}
