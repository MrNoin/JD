package com.example.service;

import com.example.entity.User;
import com.example.entity.vo.MessageModel;
import com.example.mapper.UserMapper;
import com.example.util.GetSqlSession;
import com.example.util.StringUtil;
import org.apache.ibatis.session.SqlSession;

public class UserService {

    public MessageModel userLogin(String username, String userpassword) {
        MessageModel messageModel = new MessageModel();

        //回显
        User u = new User();
        u.setUserName(username);
        u.setUserPassword(userpassword);
        messageModel.setObject(u);

        if (StringUtil.isEmpty(username) || StringUtil.isEmpty(userpassword)){
            messageModel.setCode(0);
            messageModel.setMsg("用户名和密码不得为空！");
            return messageModel;
        }
        //查询对象
        SqlSession session = GetSqlSession.createSqlSession();
        UserMapper userMapper = session.getMapper(UserMapper.class);
        User user = userMapper.queryUserByName(username);
        //判断用户对象是否为空
        if (user == null){
            messageModel.setCode(0);
            messageModel.setMsg("用户不存在");
            return messageModel;
        }
        //判断密码是否正确
        if (!userpassword.equals(user.getUserPassword())){
            messageModel.setCode(0);
            messageModel.setMsg("用户密码不正确！");
            return messageModel;
        }
        //登录成功，将信息设置到消息模型
        messageModel.setObject(user);
        return messageModel;
    }
}