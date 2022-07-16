import React from 'react'

function Login(attr) {
	const passwordRef = React.createRef()
	const emailRef = React.createRef()

	const handlerSubmit = (event) => {
		attr.state.submitCallback(emailRef.current.value, passwordRef.current.value)
		event.preventDefault()
	}
	return (
		<div className=" container login-component">
			<form onSubmit={handlerSubmit} className="row justify-content-md-center">
				<div className="col-md-auto">
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						<small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1"/>
					</div>
					<div className="form-group form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Login