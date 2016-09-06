package cn.geobeans.web.blank.todolist;

import cn.geobeans.web.common.web.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 待办事项接口
 * Created by Guo on 2016/8/31.
 */
@RestController
@RequestMapping("/todo")
public class TodoController {

    //定义路由规则

    //查询类使用GET
    private static final String GET_LIST = "";
    private static final String GET_BY_ID = "/{id}";

    //添加使用POST
    private static final String POST_SAVE = "";

    //更新使用PUT
    private static final String PUT_UPDATE = "";

    //删除使用DELETE
    private static final String DELETE_BY_ID = "/{id}";

    @Autowired
    TodoService service;

    @ResponseBody
    @RequestMapping(value = DELETE_BY_ID, method = RequestMethod.DELETE)
    public CustomResponse update(@PathVariable String id) {
        boolean rs = service.delete(id);
        return new CustomResponse(rs);
    }
    @ResponseBody
    @RequestMapping(value = PUT_UPDATE, method = RequestMethod.PUT)
    public CustomResponse update(@RequestBody Todo todo) {
        service.save(todo);
        return new CustomResponse(todo);
    }
    @ResponseBody
    @RequestMapping(value = POST_SAVE, method = RequestMethod.POST)
    public CustomResponse postSave(@RequestBody Todo todo) {
        service.save(todo);
        return new CustomResponse(todo);
    }
    @ResponseBody
    @RequestMapping(value = GET_LIST, method = RequestMethod.GET)
    public CustomResponse getList() {
        List<Todo> rs = service.getAll();
        return new CustomResponse(rs);
    }

    @ResponseBody
    @RequestMapping(value = GET_BY_ID, method = RequestMethod.GET)
    public CustomResponse getById(@PathVariable String id) {
        Todo rs = service.getById(id);
        return new CustomResponse(rs);
    }
}
