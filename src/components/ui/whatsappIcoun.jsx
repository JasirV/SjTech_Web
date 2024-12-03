import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
	const handleWhatsAppClick = () => {
		// Redirect to WhatsApp chat
		window.open("https://wa.me/97466369111", "_blank"); // Replace with your WhatsApp number
	};

	return (
		<div id="whatsapp-button" onClick={handleWhatsAppClick}>
			<div id="whatsapp-icon">
				<FaWhatsapp />
			</div>
		</div>
	);
};

export default WhatsAppButton;
