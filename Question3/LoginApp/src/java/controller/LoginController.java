/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import model.UserLogin;

/**
 *
 * @author MPrice
 */
@Named(value = "loginController")
@SessionScoped
public class LoginController implements Serializable {

    // This is the model that captures the user profile info
    private UserLogin theModel;
    // This corresponds to the response to be sent back to the client
    private String response;
    
    /**
     * Creates a new instance of LoginController
     */
    public LoginController() {
        theModel = new UserLogin();
    }

    /**
     * @return the theModel
     */
    public UserLogin getTheModel() {
        return theModel;
    }

    /**
     * @param theModel the theModel to set
     */
    public void setTheModel(UserLogin theModel) {
        this.theModel = theModel;
    }

    /**
     * @param response the response to set
     */
    public void setResponse(String response) {
        this.response = response;
    }
    
    public String getResponse() {
        boolean validLogin = theModel.authenticate(theModel.getUsername(), theModel.getPassword());
        if (!validLogin) {
            response = "Invalid login credentials.";
            return response;
        }
        String resultStr = "Hello " + theModel.getUsername() + "<br/>";
        response = resultStr;
        return response;
    }
    
}
