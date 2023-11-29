const Login = () => {
    return (
        <>
            <div className="wrapper">
                <form action="" className="form">
                    <h1 className="title">Inicio</h1>
                    <div className="inp">
                        <input type="text" name="" id="" className="input" placeholder="Usuario" />
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="inp">
                        <input type="password" name="" id="" className="input" placeholder="Contraseña" />
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <button className="submit">Iniciar Sesión</button>
                </form>
                <div></div>
                <div className="banner">
                    <div className="wel_text">Bienvenido</div>
                </div>
            </div>
        </>
    )
}

export default Login