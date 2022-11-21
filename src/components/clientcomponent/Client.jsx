import { useNavigate, Form, redirect } from "react-router-dom";
import { deleteClient } from "../../api/client";

export async function action({ params }) {
	await deleteClient(params.clientId);
	return redirect("/");
}

const Client = ({ client: { id, nombre, telefono, email, empresa } }) => {
	const navigate = useNavigate();

	return (
		<tr className='border-b'>
			<td className='p-4 space-y-2'>
				<p className='text-2xl text-gray-800'>{nombre}</p>
				<p>{empresa}</p>
			</td>

			<td className='p-6'>
				<p className='text-gray-600'>
					<span className='text-gray-800 uppercase font-bold'>Correo: </span>
					{email}
				</p>
				<p className='text-gray-600'>
					<span className='text-gray-800 uppercase font-bold'>Tel: </span>
					{telefono}
				</p>
			</td>

			<td className='p-9 flex gap-4'>
				<button
					type='button'
					className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
					onClick={() => navigate(`client/${id}/edit`)}>
					Editar
				</button>

				<Form
					method='post'
					action={`client/${id}/delete`}
					onSubmit={(e) => {
						if (!confirm("Deseas eliminar este cliente?")) {
							e.preventDefault();
						}
					}}>
					<button
						type='submit'
						className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'>
						Eliminar
					</button>
				</Form>
			</td>
		</tr>
	);
};

export default Client;
