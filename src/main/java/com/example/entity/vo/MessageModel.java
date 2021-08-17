package com.example.entity.vo;

/*消息模型对象，数据相应
* 状态码：1=成功，0=失败
*/
public class MessageModel {
    //状态码
    private Integer code = 1;
    //登录提示信息
    private String msg = "登录成功！";
    //回显对象
    private Object object;

    public MessageModel() {
    }

    public MessageModel(Integer code, String msg, Object object) {
        this.code = code;
        this.msg = msg;
        this.object = object;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }
}
