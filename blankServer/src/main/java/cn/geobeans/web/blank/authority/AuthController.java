package cn.geobeans.web.blank.authority;

import cn.geobeans.web.common.utils.HttpUtils;
import cn.geobeans.web.common.web.CustomExceptionFactory;
import cn.geobeans.web.common.web.CustomResponse;
import cn.geobeans.web.common.web.Token;
import cn.geobeans.web.common.web.TokenFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * 授权接口
 * Created by Guo on 2016/8/31.
 */
@RestController
@RequestMapping("/auth")
public class AuthController {

    //POST授权
    private static final String POST_AUTH = "";

    @Autowired
    private UserService userService;


    /**
     * 授权验证
     * @return
     */
    @ResponseBody
    @RequestMapping(path = POST_AUTH,method = RequestMethod.POST)
    public CustomResponse postToAuth(@RequestParam("username") String username,
                                     @RequestParam("password") String password,
                                     HttpServletRequest request) throws Exception{

        String ip = HttpUtils.getRequestIp(request);

        User u = userService.getValidUser(username,password);
        if(u == null){
            throw CustomExceptionFactory.createInvalidUserPasswordException();
        }else{
            Map<String,Object> rs = new HashMap<>();
            rs.put("user",u);
            Token t = TokenFactory.create(ip,u);
            rs.put("token",t);
            return new CustomResponse(rs);
        }
    }

}
