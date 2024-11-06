import "./Card.css";

export function Card({ title, description, onClick }) {
	return (
		<div className="card" onClick={onClick}>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}
