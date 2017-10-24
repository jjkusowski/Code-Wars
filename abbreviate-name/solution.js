function abbrevName(name){

   let nameArray = name.split(' ');
   return nameArray[0].charAt(0).toUpperCase() + '\.' + nameArray[1].charAt(0).toUpperCase();

}
