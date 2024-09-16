const divButton = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'black',
    width: '15vw',
    height: '8vh',
    borderRadius: '1em',
    color: 'white',
    fontSize: 'calc(10 + 2)',
}

const Button = () => {
    return (
        <div style={divButton}>
            <p>Orçamento</p>
        </div>
    );
}

export default Button;