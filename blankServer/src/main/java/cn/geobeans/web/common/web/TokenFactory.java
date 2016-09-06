package cn.geobeans.web.common.web;

import java.util.HashMap;
import java.util.UUID;

/**
 * Token 的工厂类
 * Created by Guo on 2016/9/2.
 */
public class TokenFactory {

    private static HashMap<String,Token> STORE = new HashMap<>();

    /**
     * 创建token
     * @param ip 请求IP
     * @return TOKE实体
     */
    public synchronized static Token create(String ip,Object data) {
        String key = UUID.randomUUID().toString().replace("-","");
        Token t = new Token(key,ip,data);
        STORE.put(key,t);
        return t;
    }


    /**
     * 判断是否为有效token
     * @param token token值
     * @return token
     * @throws Exception token异常
     */
    public synchronized static boolean valid(String token,String ip) throws Exception{
        Token t = STORE.get(token);
        if(t == null){
            //无效
            throw CustomExceptionFactory.createTokenInvalidException();
        }else{
            long now = System.currentTimeMillis();
            if(now - t.getTime().getTime() > t.getExpired()){
                //过期
                throw CustomExceptionFactory.createTokenExpiredException();
            }
            if(!t.getIp().equals(ip)){
                throw CustomExceptionFactory.createTokenWrongIpException();
            }

        }
        return true;
    }

    /**
     * 获取token 携带的data
     * @param token  token值
     * @return token 携带的data
     * @throws Exception token异常
     */
    public synchronized static Object getData(String token,String ip) throws Exception {
        if(valid(token,ip)){
            return STORE.get(token).getData();
        }
        return null;
    }
}
