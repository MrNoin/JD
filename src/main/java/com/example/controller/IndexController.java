package com.example.controller;

import com.example.entity.User;
import com.example.entity.vo.MessageModel;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RequestMapping("/")
@Controller
public class IndexController {

    @RequestMapping("/")
    public String index()
    {
        return  "index";
    }

    @RequestMapping("toLogin")
    public String toLogin(Model model)
    {
        MessageModel mm = new MessageModel(0,"",new User(0,"",""));
        model.addAttribute("messageModel",mm);

        return "login";
    }
}
