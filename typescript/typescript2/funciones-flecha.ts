(function(){

  let miFuncion = function( d: string ){//funcion asignada a una variable
      return d.toUpperCase;
  }

  let miFuncionF = ( d: string ) => d.toUpperCase; 

  const sumarN = function( c:number, b:number){
    return c + b;
  }

  const sumarF = (c:number, b:number) => c + b;
 

  const hulk = {
    nombre: 'Hulk',
    smash(){
      setTimeout ( () => {


        console.log(`${this.nombre} smash!!!`);

      }, 1000 );

      
      }
  }
    hulk.smash();
  

})();
