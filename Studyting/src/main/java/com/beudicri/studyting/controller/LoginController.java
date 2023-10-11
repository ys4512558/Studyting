package com.beudicri.studyting.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/login")
public class LoginController {

    @GetMapping()
    public String loginForm(){
        return "Login";
    }

    @PostMapping("/login")
    public String login(HttpServletRequest req, HttpServletResponse res){
        String id = req.getParameter("id");
        String pwd = req.getParameter("pwd");

        System.out.println(id);
        System.out.println(pwd);
        if (id.equals("test") && pwd.equals("test")) {
            return "main_page";
        }
        return "redirect:/login?msg=로그인 실패";
    }
}
