package cn.geobeans.web.blank.test.todolist;

import cn.geobeans.web.blank.todolist.Todo;
import cn.geobeans.web.blank.todolist.TodoService;
import com.alibaba.druid.support.json.JSONUtils;
import com.alibaba.fastjson.JSON;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * 待办事项服务测试类
 * Created by Guo on 2016/8/31.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(value = {
        "classpath*:application-context.xml",
})
public class TodoServiceTest {

    @Autowired
    private TodoService service;

    @Test
    @Rollback(false)
    public void save() {
        Todo t = new Todo();
        t.setContent("今天是个好的开始");
        boolean rs = service.save(t);
        System.out.println("保存结果：" + rs);
    }

    @Test
    public void getAll() {
        List<Todo> rs = service.getAll();
        for (Todo t : rs) {
            System.out.println(JSON.toJSONString(t));
        }
    }

    @Test
    @Rollback(false)
    public void deleteAll() {
        List<Todo> rs = service.getAll();
        for (Todo t : rs) {
            System.out.println(service.delete(t.getId()));
        }
    }

    @Test
    @Rollback(false)
    public void getById() {
        Todo rs = service.getById("8a8080db56e01eea0156e01eec0e0000");
        System.out.println(JSON.toJSONString(rs));

    }
    @Test
    @Rollback(false)
    public void deleteById() {
        String id = "8a8080db56e01eea0156e01eec0e0000";
        boolean rs = service.delete(id);
        System.out.println("删除"+id+":"+rs);

    }
}
