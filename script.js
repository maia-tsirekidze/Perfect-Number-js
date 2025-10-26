// შეიყვანე რიცხვი n.
// პროგრამამ უნდა შეამოწმოს:

// თუ რიცხვის უკეთეს გამყოფთა ჯამი უდრის თვით რიცხვს → იდეალურია
num = Number(prompt("შეიყვანე რიცხვი:"))
// let sum=true
let sum = 0;
for(let i=1; i<num; i++){
    if(num%i==0){
        sum=sum+i
        
    }
}
if(sum==num){
    console.log(sum +"  იდიალურია")
}else{
    console.log(sum + " არ არის იდიალური")
}