import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
	const location = useLocation();

	return (
		<nav className='mt-10'>
			<Link
				className={`${
					location.pathname === "/" ? "text-blue-300" : "text-white"
				} text-2xl block mt-2 hover:text-blue-300`}
				to='/'>
				Clientes
			</Link>
			<Link
				className={`${
					location.pathname === "/client/new-client"
						? "text-blue-300"
						: "text-white"
				} text-2xl block mt-2 hover:text-blue-300`}
				to='/client/new-client'>
				Nuevo Cliente
			</Link>
		</nav>
	);
};

export default NavBar;
