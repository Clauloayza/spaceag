import createStore from 'redux-zero';

const initialState = {
    spaceag :{
        title: "COSECHA LA DATA DE TUS CULTIVOS",
        subtitle: "Digitaliza tu Campo. Aumenta tu Productividad",
    },
    titles:{
        soluciones: "NUESTRAS SOLUCIONES",
        customers: "NUESTROS CLIENTES",
        media: "MEDIA",
        contact: "CONTACTANOS"
    },
    subtitle:{
        solution1: "DIGITALIZA TUS CAMPOS",
        solution2:"DETECTA PROBLEMAS EN TUS CULTIVOS",
        solution3: "INTEGRA Y VISUALIZA TU DATA DE CAMPO EN NUESTRO SOFTWARE",
        solution4: "OBTEN MEJORES PREDICCIONES Y ALERTAS",
        solution5: "MONITOREA TU PRODUCCIÓN CON CÁMARAS INTELIGENTES",
        solution6: "CONTROLA Y OPTIMIZA LA GESTIÓN DE TUS EQUIPOS"
    },
    text:{
        text1: "Generamos cartografía digital con drones profesionales.",
        text2: "Monitoreamos la salud de tus cultivos.",
        text3: "Maneja toda la información de tus campos en nuestro Dashboard.",
        text4: "Reduce la incertidumbre y la variabilidad de tus campos.",
        text5: "Supervisa la evolución de tus frutos con nuestra solución de visión por computadora.",
        text6: "Digitaliza tus tractores para controlar rutas, aplicaciones y recolectar data crítica de tus cultivos."
    },
    parrafo:{
        parrafo1: "Organiza tus lotes o válvulas geográficamente para construir una base de datos de tu campo. Conoce las áreas exactas de tus cultivos y las variaciones topográficas en tus terrenos.",
        parrafo2: "Nuestros drones con cámaras infrarrojas y térmicas rapidamente detectan anomalías de riego y de vegetación en tus campos para que puedas tomar acciones inmediatas y aumentar tu productividad.",
        parrafo3:"Visualiza imágenes de drones y satelites en nuestro software. Sube archivos simples de Excel para crear diferentes capas de información de tus cultivos. Integra esta información para encontrar relaciones y modelos de decisión.",
        parrafo4:"Utiliza nuestros modelos predictivos y sistemas de alertas para optimizar gestión de tus cultivos. Te ayudamos a estimar volumenes de cosecha, riesgos de sanidad y problemas de vegetación para aumentar tu rendimiento.",
        parrafo5:"Nuestro software de reconocimiento de imágenes te permite calcular con mayor exactitud los volumenes, tiempos y puntos de cosecha, identificando anomalías en las caracteristicas de los frutos.",
        parrafo6: "Aumenta la productividad de tus tractores instalando nuestros sensores móviles. Conoce la velocidad, vibración en ruta y el caudal de aplicaciones de tus tractores. Recolecta data precisa de variables como temperatura, humedad y radiación.",
    },
    counter:{
        a:"Héctareas Voladas",
        b:"Números de vuelos",
        c:"Agrícolas Voladas",
        d:"Números de Localidades"
    },
    contacto:{
        text:"Escribenos para solicitarte un demo de nuestro software",
        name: "NOMBRE COMPLETO",
        email: "CORREO",
        puesto: "PUESTO",
        compania: "COMPAÑIA",
        message: "MENSAJE"
    },
    blog:{
        page:"Blog",
        view: "Ver Blog"
    }
        
}

const store = createStore(initialState);
export default store;