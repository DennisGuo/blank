package cn.geobeans.web.blank;

import cn.geobeans.web.blank.authority.User;
import cn.geobeans.web.blank.authority.UserService;
import cn.geobeans.web.common.utils.CalendarUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.xml.crypto.Data;

/**
 * 应用监听
 * Created by Guo on 2016/9/2.
 */
public class AppListener implements ServletContextListener {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private WebApplicationContext context;
    private UserService userService;
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        long a = System.currentTimeMillis();
        StringBuilder sb = new StringBuilder();
        sb.append("##############################\n");
        sb.append("         应用启动中\n");
        sb.append("##############################");

        logger.info(sb.toString());

        this.initContext(sce);

        long b = System.currentTimeMillis();
        sb = new StringBuilder();
        sb.append("##############################\n");
        sb.append("         应用启动完成【耗时"+(b-a)+"ms】\n");
        sb.append("##############################");
        logger.info(sb.toString());
    }

    /**
     * 初始化与spring context相关的内容
     * @param sce ServletContextEvent
     */
    private void initContext(ServletContextEvent sce) {
        try {
            context = WebApplicationContextUtils.getWebApplicationContext(sce.getServletContext());

            // 系统演示：插入用户
            userService = (UserService) context.getBean("userService");
            userService.save(new User("ghx","ghx","郭恒熙"));

        } catch (BeansException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        StringBuilder sb = new StringBuilder();

        try {
            userService.deleteByUsername("ghx");
        } catch (Exception e) {
            e.printStackTrace();
        }

        sb.append("##############################\n");
        sb.append("         应用已停止\n");
        sb.append("##############################");
        logger.info(sb.toString());
    }
}
