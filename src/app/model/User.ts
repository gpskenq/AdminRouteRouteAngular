class User {
    private userid: String;
    private name:String;
    private password:String;
  
    constructor(private _userid: String, private _name: String, private _password: String) {
        this.userid = _userid;
        this.name = _name;
        this.password = _password;
     }
  
    set setuserid(value:String){
        this.userid = value;
    }

    get getuserid(){
        return this.userid;
    }

    set setname(value:String){
        this.name = value;
    }

    get getname(){
        return this.name;
    }

    set setpassword(value:String){
        this.password = value;
    }

    get getpassword(){
        return this.password;
    }
}