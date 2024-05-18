let promise = new Promise((res, rej)=>{
    setTimeout((url)=>{
        let error = true;
        if(!error){
            res({name : "zaid", age : 24})
        }else{
            rej("error: something went wrong")
        }
    }, 1000)
})

async function consumePromise(){
    try {
        const responce = await promise;
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}

consumePromise()


