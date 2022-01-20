import "./Backdrop.css";

const Backdrop = ({ show }) => {
	return show && <div className="backdrop"></div>;
};

export default Backdrop;
