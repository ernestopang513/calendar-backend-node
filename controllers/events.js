const { response } = require("express");




const getEventos = (req, res = response ) =>{

    res.status(200).json({
        ok:true,
        msg: 'get eventos'
    })
};



const crearEvento = (req, res = response ) =>{

    res.status(200).json({
        ok:true,
        msg: 'creando evento'
    })
};

const actualizarEvento = (req, res = response ) =>{

    console.log(req.route);
    res.status(200).json({
        ok:true,
        msg: 'actualizando evento'
    })
};

const eliminarEvento = (req, res = response ) =>{

    res.status(200).json({
        ok:true,
        msg: 'eliminando eventos'
    })
};

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
};