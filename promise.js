// Promise = an object that represents the eventual success or failure of an asynchronous operation and provides a way to handle its result later.
const promisesOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async is complete')
        resolve()
    }, 1000)
})
promisesOne.then(function () {
    console.log("Promise Consumed")
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('sync complete')
        resolve()
    }, 1000)

}).then(function () {
    console.log('promised complete')
})
const newPromis=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"shayan", email:'ShayanAhmad@gmail.com'})
    },1000)
});
newPromis.then(function(user){
        console.log(user);

})
const promisFour = new Promise(function (resolve, reject) {
    setTimeout(()=> {
        let error = false;
        if (!error) {
            resolve({ name: "shayan ahmad", email: 'ShayanAhmada@gmial.com' })
        } else {
            reject("Error:something Went Wrong")
        }
    }, 1000)
}).then((user)=> {
    console.log(user);
    return user.name
}
).then((user)=> {
    console.log(user)
}).catch(function (error) {
    console.log(error)
}).finally(()=> console.log('may be given task is Resolved or Reject'))
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=true;
        if (!error) {
            resolve({ name: 'shayan ahmad', Password: 'nokiakhan' })
        } else {
            reject('Error:something Went Wrong')
        }
    }, 1000)
});
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()
async function getting() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:Invalid Detail get');
    }
}
getting()
fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(response){
    return response.json()
}).then(
    function(data){
        console.log(data);
    }
).catch((error) => {console.log("Error:found")})
