import styles from '../../styles/Home.module.css';

export const GridBox = (props:any) => {
    console.log(props.link)
    return (
        <a href={props.link}  className={styles.card}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </a>
    )
}