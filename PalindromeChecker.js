function palindrome(str) {
     str=str.toLowerCase();
    var reg=/\W|_/g;
 var temp=str.replace(reg,"");
    var res=temp.split("").reverse().join("");
    if(temp==res){
        return true;
    }
    return false;
}
palindrome("eye");