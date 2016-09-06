package cn.geobeans.web.blank.test.authority;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.context.WebApplicationContext;

/**
 * REST接口测试
 * Created by Guo on 2016/8/31.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(value = {
        "classpath*:application-context.xml"
})
public class AuthControllerTest {

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
    public void auth() {
        try {

            MockHttpServletResponse rs = this.mvc.perform(
                        MockMvcRequestBuilders
                                .post("/auth")
                                .param("username","ghx")
                                .param("password","ghx")
                    )
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

}

