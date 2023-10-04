package com.example.authenticator.app.config;


import com.example.authenticator.app.model.User;

import java.util.Map;

public interface JwtGeneratorInterface {

    Map<String, String> generateToken(User user);
}
