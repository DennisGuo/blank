package cn.geobeans.web.blank.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 待办事项服务类
 * Created by Guo on 2016/8/31.
 */
@Service
@Transactional
public class TodoService {

    @Autowired private TodoDao dao;

    /**
     * 保存或修改实体
     * @param entity 实体
     * @return 是否保存成功
     */
    public boolean save(Todo entity){
        try {
            dao.save(entity);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    /**
     * 获取所有实体类
     * @return 返回实体类数组
     */
    public List<Todo> getAll(){
        return dao.getAll();
    }

    /**
     * 删除实体类
     * @param key 实体ID
     * @return 是否删除成功
     */
    public boolean delete(String key){
        try {
            dao.delete(key);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    /**
     * 根据ID获取实体类
     * @param id ID
     * @return 实体类
     */
    public Todo getById(String id) {
        return dao.get(id);
    }
}
