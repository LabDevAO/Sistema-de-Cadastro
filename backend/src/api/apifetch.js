
async function getId(id){
    let formData = new FormData();
    formData.append("id", id);

    try{
        let sendData  = await fetch('http://localhost:8080/teste', {
            method:"post",
            body: formData,
        });

        if(sendData.ok){
            let data = await sendData.text();
            console.log(data);
        }
        else{
            console.log("Erro na solicitacao!");
        }
    }
    catch(error){
        console.log("error! " + error);
    }

}
