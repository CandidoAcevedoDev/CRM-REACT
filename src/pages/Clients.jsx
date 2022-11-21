import { useLoaderData } from "react-router-dom";
import Client from "../components/clientcomponent/Client";
import { getClients } from "../api/client";

export async function loader() {
	return await getClients();
}

const Clients = () => {
	const clients = useLoaderData();

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
			<p className='mt-3'>Administra tus clientes</p>

			{clients.length ? (
				<table className='w-full bg-white shadow mt-5 table-auto'>
					<thead className='bg-blue-800 text-white'>
						<tr>
							<th className='p-2 text-left'>Clientes</th>
							<th className='p-2 text-left'>Contacto</th>
							<th className='p-2 text-left'>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{clients.map((client) => (
							<Client client={client} key={client.id} />
						))}
					</tbody>
				</table>
			) : (
				<p className='text-center mt-10'>No hay clientes aún</p>
			)}
		</>
	);
};

export default Clients;
