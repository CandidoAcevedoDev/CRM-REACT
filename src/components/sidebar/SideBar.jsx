import NavBar from "../navbar/Navbar";
const SideBar = () => {
	return (
		<aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
			<h2 className='text-4xl font-black text-center text-white'>
				CRM -Clientes
			</h2>

			<NavBar />
		</aside>
	);
};

export default SideBar;
