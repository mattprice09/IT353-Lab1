package model;

import java.util.HashMap;
import java.util.Map;

/**
 * @author MPrice
 */
public class UserLogin {
    private String username;
    private String password;
    private int minimum = 8;
    private int maximum = 100;

    /** 
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the minimum
     */
    public int getMinimum() {
        return minimum;
    }

    /**
     * @param minimum the minimum to set
     */
    public void setMinimum(int minimum) {
        this.minimum = minimum;
    }
    
    public static boolean authenticate(String user, String pw) {
        Map<String, String> map = new HashMap<String, String>();
        map.put("Billy123", "aaaaaaaa");
        map.put("Mary1234", "bbbbbbbb");
        map.put("Joe123450", "cccccccc");
       
        return map.get(user) != null && map.get(user).equals(pw);
    }

    /**
     * @return the maximum
     */
    public int getMaximum() {
        return maximum;
    }

    /**
     * @param maximum the maximum to set
     */
    public void setMaximum(int maximum) {
        this.maximum = maximum;
    }
}
