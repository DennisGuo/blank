package cn.geobeans.web.blank.test.todolist;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.http.HttpServletResponse;

/**
 * REST接口测试
 * Created by Guo on 2016/8/31.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(value = {
        "classpath*:application-context.xml"
})
public class TodoControllerTest {

    @Autowired
    WebApplicationContext context;

    private MockMvc mvc;
    private Long before;

    @Before
    public void before() {
        this.mvc = MockMvcBuilders.webAppContextSetup(context).build();
        this.before = System.currentTimeMillis();
    }

    @After
    public void after() {
        Long end = System.currentTimeMillis();
        System.out.println("耗时：" + (end - before) + " ms");
    }

    @Test
    public void getList() {
        try {
            MockHttpServletResponse rs = this.mvc.perform(MockMvcRequestBuilders.get("/todo"))
                    .andReturn()
                    .getResponse();
            int code = rs.getStatus();
            String body = rs.getContentAsString();
            System.out.println("GET /todo 返回结果：" + code);
            System.out.println(body);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void postToSave() {
        try {
            MockHttpServletResponse rs = this.mvc.perform(
                    MockMvcRequestBuilders
                            .post("/todo")
                            .content("{\"content\":\"这个是REST添加\",\"status\":\"UNDO\"}")
                            .contentType(MediaType.APPLICATION_JSON)
                            .characterEncoding("UTF-8")
            )
                    .andReturn()
                    .getResponse();
            int code = rs.getStatus();
            String body = rs.getContentAsString();
            System.out.println("POST /todo 返回结果：" + code);
            System.out.println(body);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void putToUpdate() {
        try {
            MockHttpServletResponse rs = this.mvc.perform(
                    MockMvcRequestBuilders
                            .put("/todo")
                            .content("{\"id\":\"8a8080db56e3cf800156e3cf84c20000\",\"content\":\"这个是REST添加,然后修改了\",\"status\":\"UNDO\"}")
                            .contentType(MediaType.APPLICATION_JSON)
                            .characterEncoding("UTF-8")
            )
                    .andReturn()
                    .getResponse();
            int code = rs.getStatus();
            String body = rs.getContentAsString();
            System.out.println("PUT /todo 返回结果：" + code);
            System.out.println(body);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}

