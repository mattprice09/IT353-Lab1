package assign2;
// This class allows one to model an "email" and has a couple of methods that 
// illustrate how one can manipulate and validate the email string.

public class Email {
	private String emailStr;

	public Email() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Email(String str) {
		super();
		// TODO Auto-generated constructor stub
		emailStr = str;
	}

	public String getEmailStr() {
		return emailStr;
	}

	public void setEmailStr(String emailStr) {
		this.emailStr = emailStr;
	}
	
	public boolean isValid() {
		
		// Check if @ sign use is valid
		int atPosition = emailStr.indexOf("@");
		if (atPosition == -1                        // must have an @ sign
				|| atPosition == 0 				   // no @ at the beginning
				|| atPosition == emailStr.length()-1) // no @ at the end
			return false;
		
		String [] parts = emailStr.split("@");
		
		// Only one @ sign
		if (parts.length != 2) {
			return false;
		}
		
		int numPds = emailStr.length() - (emailStr.replace(".", "")).length();
		if (numPds == 0) {
			// No periods
			return false;
		} else if (numPds == 1) {
			// Only one period, no need to iterate through string
			int pdPosition = emailStr.indexOf(".");
			if (pdPosition == 0 				      // no period at the beginning
					|| pdPosition == emailStr.length()-1  // no period at the end
					|| pdPosition == atPosition + 1)      // period cannot come immediately after @ sign
				return false;
		}
		
		// More than one period
		int i = 0;
		while (i < emailStr.length()) {
			if (emailStr.charAt(i) == '.') {
				if (i == 0
						|| i == emailStr.length()-1
						|| i == atPosition + 1) 
					return false;
			}
			i++;
		}
		
		return true;
	}
}
