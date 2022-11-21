import { getClient, updateClient } from "../api/client";
import FormClient from "../components/form/FormClient";
import {
	Form,
	useNavigate,
	useLoaderData,
	useActionData,
	redirect,
} from "react-router-dom";
import Error from "../components/errors/Error";

export async function loader({ params }) {
	const result = await getClient(params.clientId);

	if (Object.values(result).length === 0)
		throw new Response("", { status: 404, statusText: "No hay resulltados" });

	return result;
}

export async function action({ request, params }) {
	const formData = await request.formData();

	const data = Object.fromEntries(formData);

	const email = formData.get("email");

	// Validate
	const errors = [];

	if (Object.values(data).includes("")) {
		errors.push("Todos los campos son obligatorios");
	}

	let regex = new RegExp(
		"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
	);

	if (!regex.test(email)) {
		errors.push("El Correo no es valido");
	}

	// return errors
	if (Object.keys(errors).length) {
		return errors;
	}

	await updateClient(params.clientId, data);

	return redirect("/");
}

const EditClientPage = () => {
	const navigate = useNavigate();
	const client = useLoaderData();
	const errors = useActionData();

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
			<p className='mt-3'>Edita los datos de un Cliente</p>

			<div className='flex justify-end'>
				<button
					className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
					onClick={() => navigate("/")}>
					{/* or -1 */}
					Volver
				</button>
			</div>

			<div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
				{errors?.length &&
					errors.map((error, i) => <Error key={i}>{error}</Error>)}

				<Form method='POST' noValidate>
					<FormClient client={client} />

					<input
						type='submit'
						className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer'
						value='Guardar Cambios'
					/>
				</Form>
			</div>
		</>
	);
};

export default EditClientPage;
