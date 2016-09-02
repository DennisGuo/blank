package cn.geobeans.web.common.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * 全局异常处理
 * Created by Guo on 2016/9/1.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    @ResponseBody
    ///@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    JsonResponse defaultExceptionHandler(Exception e){
        e.printStackTrace();
        return new JsonResponse(JsonResponse.Status.ERROR,e.getMessage());
    }
}
