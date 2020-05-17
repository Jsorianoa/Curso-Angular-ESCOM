(()=>{

    // Uso de Let y Const
    let nombre = 'Ricardo Tapia';
    let edad = 23;
  
    const PERSONAJE = {nombre, edad};
  
  
    // Cree una interfaz que sirva para validar el siguiente objeto
    interface heroe{
        nombre:string;
        artesMarciales:string[];
    }
    const batman:heroe = {
      nombre: 'Bruno Díaz',
      artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    }
  
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = ( a:number, b:number ) => (a + b) * 2;
  
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger( nombre:string, 
                         poder?:string, 
                         arma:string ='arco' 
                         ){
      let mensaje;
      if( poder ){
        mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
      }else{
        mensaje = nombre + ' tiene un ' + poder
      }
    };

    let texto = `hola mundo`
  
    class Rectangulo{
        constructor(
            public base:number,
            public altura:number
        ){}
        calcularArea = ():number => this.base * this.altura;

    } 
    const rec = new Rectangulo(2,4);
    console.log(rec);
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
  
  
  
  })();
