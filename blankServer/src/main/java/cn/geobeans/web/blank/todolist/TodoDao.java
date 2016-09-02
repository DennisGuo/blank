package cn.geobeans.web.blank.todolist;

import cn.geobeans.web.common.database.HibernateDao;
import org.springframework.stereotype.Repository;

/**
 * Created by Guo on 2016/8/31.
 */
@Repository
public class TodoDao extends HibernateDao<Todo,String>{
}
