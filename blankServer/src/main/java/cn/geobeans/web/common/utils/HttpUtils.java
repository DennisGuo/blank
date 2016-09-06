package cn.geobeans.web.common.utils;

import javax.servlet.http.HttpServletRequest;

/**
 * HTTP相关类
 * Created by Guo on 2016/9/2.
 */
public class HttpUtils {
    /**
     * 获取IP
     * @param request
     * @return
     */
    public static String getRequestIp(HttpServletRequest request) {
        String createIp = request.getHeader("X-Forwarded-For");
        //123.117.94.145, 123.151.42.47
        if (createIp == null) {
            createIp = request.getRemoteAddr();
        } else if (createIp.contains(",")) {
            createIp = createIp.split(",")[0];
        }
        return createIp;
    }
}
