import React, { Suspense } from 'react';
import { FaPhoneSquareAlt } from "react-icons/fa";
import Loader from '../../Components/Loader/Loader';
import "./Contact.scss";

const Title = React.lazy(() => import("../../Components/Title/Title"));
const ContactForm = React.lazy(() => import("../../Components/Form/Form"));
const Map = React.lazy(() => import("../../Components/Map/Map"));


export interface Props  {
	checkDisabled?: (self: any) => void;
}

const Contact:React.FC<Props> = () => {
	return (
		<Suspense fallback={<Loader/>}>
			<div className='contact'>
				<Title title="Contact" className="contact__title" />
				<div className="contact__infos">
					<p>Vous pouvez me contacter directement par téléphone en cliquant sur le lien suivant</p>
					
						<a className="contact__infos-tel" href="tel:+33614382452"><FaPhoneSquareAlt/></a>
					
					<p>Ou remplissez le formulaire ci-dessous. </p>
				</div>
				<ContactForm/>
				<Title title="Localisation" className="contact__place" />
				<Map/>
			</div>
		</Suspense>
	)
};

export default Contact;
