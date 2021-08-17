package com.example.test;

import com.example.entity.User;
import com.example.mapper.UserMapper;
import com.example.util.GetSqlSession;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

public class Test {
    public static void main(String[] args) {
        SqlSession session = GetSqlSession.createSqlSession();
        UserMapper userMapper = session.getMapper(UserMapper.class);
        User user = userMapper.queryUserByName("zhangsan");
        System.out.println(user);
    }
}
