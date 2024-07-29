  function setUserName(userName){
    this.userName = userName
    console.log("callled");
  }

  function createUser(userName,email,loction){
    // setUserName.call(this, userName)
    setUserName(userName)// this line will not set user name but called the function
    this.email = email
    this.loction = loction
  }

  const newUser = new createUser("chai","chao@gmail.com","Kannada")

  console.log(newUser);