package com.example.authenticator.app.service;

import com.example.authenticator.app.exception.UserNotFoundException;
import com.example.authenticator.app.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public void saveUser(User user);
    public User getUserByNameAndPassword(String name, String password) throws UserNotFoundException;
}
