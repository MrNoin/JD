package com.example.controller;

import com.example.entity.vo.MessageModel;
import com.example.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequestMapping("/user")
@RestController
public class UserController{
    //实例化对象
    private UserService userService = new UserService();

    @RequestMapping("login")
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //接受用户名和密码
        String username = request.getParameter("username");
        String userpassword = request.getParameter("userpassword");
        //调用servi方法
        MessageModel messageModel = userService.userLogin(username,userpassword);
        //判断状态码
        if (messageModel.getCode() == 1){
            //成功
            request.getSession().setAttribute("user",messageModel.getObject());
            response.sendRedirect("/");
        }else{
            //失败
            request.setAttribute("messageModel",messageModel);
            request.getRequestDispatcher("/toLogin").forward(request,response);
        }
    }
}
