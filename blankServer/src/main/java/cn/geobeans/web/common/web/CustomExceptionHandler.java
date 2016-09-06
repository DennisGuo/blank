package cn.geobeans.web.common.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

/**
 * 全局异常处理
 * Created by Guo on 2016/9/1.
 */
@ControllerAdvice
public class CustomExceptionHandler {

    private final  Logger logger = LoggerFactory.getLogger(this.getClass());

    @ExceptionHandler(Exception.class)
    @ResponseBody
    ///@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    CustomResponse defaultExceptionHandler(Exception e){
        //e.printStackTrace();
        logger.debug("Exception Handler : " + e.getMessage());

        if(e instanceof CustomException){
            CustomException ex = (CustomException) e;
            return new CustomResponse(CustomResponse.Status.ERROR,ex.getMessage(),ex.getCode());
        }else{
            return new CustomResponse(CustomResponse.Status.ERROR,e.getMessage() == null ? e.toString() : e.getMessage());
        }

    }
}
