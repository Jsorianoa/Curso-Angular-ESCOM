(()=>{

  interface Xmen{
    nombre:string;
    edad:number;
    poder?:string
  }
  const enviarMision = (xmen:Xmen)=>{
    console.log(`enviando a ${xmen.nombre} a la mision`);

  }
  const regresarMision = (xmen:Xmen)=>{
    console.log(`regresar a ${xmen.nombre} a la mision`);

  }

  const wolvering:Xmen ={
    nombre:'Loggan',
    edad:50
  }

  enviarMision(wolvering);
  regresarMision(wolvering);

})();
