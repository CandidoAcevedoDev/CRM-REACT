import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";

const Layout = () => {
	return (
		<div className='md:flex md:min-h-screen'>
			<SideBar />

			<main className='md:3/4 p-10 md:h-screen w-full overflow-auto'>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
