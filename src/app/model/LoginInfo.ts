class LoginInfo {
    private userid: String;
    private password:String;
  
    constructor(private _userid: String, private _password: String) {
        this.userid = _userid;
        this.password = _password;
     }
  
    set setuserid(value:String){
        this.userid = value;
    }

    get getuserid(){
        return this.userid;
    }

    set setpassword(value:String){
        this.password = value;
    }

    get getpassword(){
        return this.password;
    }
}