(()=>{

  console.log('Inicio');

  const promp1= new Promise(( resolve, reject )=>{
    setTimeout(()=>{
      reject('Se termino el timeout');
    },1000);

  });

  promp1
        .then(mensaje=>console.log(mensaje))
        .catch(err=>console.warn(err));
        
  console.log('Fin');

})();
