const url = "https://cat-fact.herokuapp.com/facts";

const getFacts = async() =>{
    console.log("succesesfull connection");
    let response = await fetch(url);
    console.log(response);// JSON OR AJAJ
    let data = await response.json();
    console.log(data[0].text)
    console.log('Facts :>> ',data[1].text);
};
getFacts();



