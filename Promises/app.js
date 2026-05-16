console.log('hello world');


function addmission(fees) {
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            if (fees >= 2000) {
                resolve('admission successful')
            } else {
                reject('We are sorry')
            }
        }, 1000);
    })
}

const executePromise = async () => {
    try{
        const result = await addmission(500)
        console.log(result);
        
    }catch(err){
        console.log(err);
        
    }
}
executePromise()