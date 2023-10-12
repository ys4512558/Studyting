package com.beudicri.studyting.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String loginForm(){
        return "Login";
    }

    @PostMapping("/login")
    public String login(HttpServletRequest req, HttpServletResponse res) throws UnsupportedEncodingException {
        String id = req.getParameter("id");
        String pwd = req.getParameter("pwd");

        System.out.println(id);
        System.out.println(pwd);
        if (id.equals("test") && pwd.equals("test")) {
            return "redirect:/home";
        }
        String msg = URLEncoder.encode("로그인 실패", "utf-8");
        return "redirect:/login?msg="+msg;
    }
}
