package cn.geobeans.web.blank.authority;

import cn.geobeans.web.blank.todolist.Todo;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 用户授权服务
 * Created by Guo on 2016/8/31.
 */
@Service
@Transactional
public class UserService {

    @Autowired private UserDao dao;


    /**
     * 保存或修改实体
     * @param entity 实体
     * @return 是否保存成功
     */
    public boolean save(User entity){
        try {
            dao.save(entity);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    /**
     * 验证用户密码，并返回用户信息
     * @param username 用户名
     * @param password 密码
     * @return 用户实体
     */
    public User getValidUser(String username, String password) {
        try {
            User u = getByUsername(username);
            if(u.getPassword().equals(password)){
                return u;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 根据用户名查询用户
     * @param username 用户名
     * @return 用户实体
     * @throws Exception Hibernate异常
     */
    private User getByUsername(String username) throws Exception{
        Criteria c = dao.createCriteria();
        c.add(Restrictions.eq("username",username));
        return (User) c.uniqueResult();
    }


    /**
     * 根据用户名删除用户
     * @param username 用户名
     * @return 删除成功
     * @throws Exception Hibernate异常
     */
    public boolean deleteByUsername(String username) throws Exception {
        User u = getByUsername(username);
        if(u != null){
            dao.delete(u);
        }
        return true;
    }
}
