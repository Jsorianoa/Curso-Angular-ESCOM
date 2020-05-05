(()=>{

  const avenger = {
    nombre: 'Steve',
    clave: 'Capitán America',
    poder: 'Droga'
  }
  const extraer = ({nombre,poder}: any)=>{

    //const {nombre, poder}=avenger

    console.log(nombre);
    console.log(poder);
  
  }
  //extraer(avenger); 
  const avengers: string[]=['Thor', 'Spiderman', 'IronMan'];

  const [, , Man]=avengers;
  //console.log(Dios);
  //console.log(Araña);
  //console.log(Man);

  const extraerArr=([thor, spiderman, ironman]:string[])=>{
    console.log(thor);
    console.log(spiderman);
    console.log(ironman);
  }
  extraerArr(avengers);

})();
