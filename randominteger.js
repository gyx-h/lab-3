function randomInt(){
    //Math.random() generates [0,1), *100 gives [0,100), floor rounds down to get 0~99, add 1 to get 1~100
    return Math.floor(Math.random()*100)+1;
}