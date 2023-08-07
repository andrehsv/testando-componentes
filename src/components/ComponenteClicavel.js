const ComponenteClicavel = () => {
    const clique = () => {
        const resposta = prompt('Digite seu nome');
        alert(`Olá, ${resposta}`);
    };

    return (
        <>
            <button onClick={clique}>Clique aqui</button>
        </>
    );
};

export default ComponenteClicavel;