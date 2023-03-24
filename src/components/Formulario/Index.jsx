import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)

    useEffect(() => {

    },[])

    const resultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return(
                <p>Você foi aprovado</p>
            )
        } else {
            return (
                <p>Você não foi aprovado</p>
            )
        }
    }

    return (
        <form >
            {/* outra forma de usar */}
            <input type="number" placeholder="Nota da matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} /> 
            {/* forma de usar */}
            <input type="number" placeholder="Nota da matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota da matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {resultado()}
        </form>
    )
}

export default Formulario