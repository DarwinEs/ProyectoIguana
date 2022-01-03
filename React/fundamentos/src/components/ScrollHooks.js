import React, {useState, useEffect} from 'react';

export default function ScrollHooks(){
    const [scrollY, setscrollY] = useState(0);


    useEffect(()=>{
        console.log("Moviendo el Scroll")


    const detectarScroll = () => setscrollY(window.pageYOffset);


    window.addEventListener("scroll", detectarScroll);

    return () =>  {
        window.removeEventListener("scroll", detectarScroll);
    };



    },[scrollY]);


    //Sin el segundo parametro = ComponentDidUpdate()
    useEffect(() => {
      console.log("Fase de Actualización")
    });

    //Con parametro el blanco = ComponentDidMount()
    useEffect(() => {
        console.log("Fase de Montaje")
      }, []);


    useEffect(() => {
        return () => {
          console.log("Fase de Desmontaje");

        };
        
      }, []);




    return(
    <>
    <h2>Hooks ~ useEffect y el Ciclo de Vida</h2>

    <p>Scroll Y del Navegador {scrollY}px</p>
    </>
    );
}