package cn.geobeans.web.common.web;

import cn.geobeans.web.common.utils.HttpUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 自定义拦截器
 * Created by Guo on 2016/9/2.
 */
public class CustomInterceptor implements HandlerInterceptor {


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String ip = HttpUtils.getRequestIp(request);
        String uri = request.getRequestURI();

        //判断请求叠纸是否为授权获取token的URI
        if(!uri.endsWith("/auth")) {

            String token = request.getParameter("token");
            if (token != null) {
                if(TokenFactory.valid(token,ip)){

                }
            } else {
                throw CustomExceptionFactory.createTokenExpectedException();
            }
        }

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
