import React from "react";
import "./style.css";

function Modal({ handleClose, show, children }) {
	let showHideClassName = show ? 'modal display-block' : 'modal display-none';	
	return(
		<div>
			<div className={showHideClassName}>
				<section className='modal-main'>
					{children}
					<button
						onClick={handleClose}
					>
						Close
					</button>
				</section>
			</div>
		</div>
	)
}
  

export default Modal

