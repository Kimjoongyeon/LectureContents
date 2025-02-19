package com.example.demo.controller.vue.jpa;

import com.example.demo.service.jpa.JPATestMemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/jpa")
@CrossOrigin(origins = "http://localhost:7777", allowedHeaders = "*")
public class JPATestMemberController {

    @Autowired
    private JPATestMemberService service;

    @GetMapping("/jpaMemberTest")
    public void getJPATest () throws Exception {
        log.info("getJPATest(): " + service.findByJPQL());
        log.info("getJPATest - findSpecificByJPQL(): " + service.findSpecificByJPQL());

        List<Object[]> resultLists = service.findSpecificByJPQL();

        for (Object[] result : resultLists) {
            log.info("getJPATest - findSpecificByJPQL():" + Arrays.toString(result));
        }
    }
}
