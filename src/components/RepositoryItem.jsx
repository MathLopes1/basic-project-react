export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'unform generic'}</strong>
            <p>{props.repository?.description}</p>

            <a href={props.repository?.link}>
               Acessa Repositório
            </a>
        </li>
    );
}