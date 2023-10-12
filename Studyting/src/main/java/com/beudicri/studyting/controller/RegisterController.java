package com.beudicri.studyting.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/register")
public class RegisterController {
    @GetMapping
    public String registerForm(){
        return "Register";
    }

    /**
     * Problem : 2023-10-12
     * ajax로 리턴해주기
     * @param req
     * @param res
     * @return
     */
    @PostMapping("/check-id")
    public boolean checkID(HttpServletRequest req, HttpServletResponse res){
        String id = req.getParameter("id");
        System.out.println(id);
        if(id.equals("test"))
            return false;
        return true;
    }
    @PostMapping("/check-name")
    public boolean checkName(HttpServletRequest req, HttpServletResponse res){
        String name = req.getParameter("name");
        System.out.println(name);
        if(name.equals("test"))
            return false;
        return true;
    }
}
