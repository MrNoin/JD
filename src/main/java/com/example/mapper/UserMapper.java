package com.example.mapper;

import com.example.entity.User;
import org.apache.ibatis.annotations.Mapper;

/*用户接口*/

public interface UserMapper {
     User queryUserByName(String userName);
}
