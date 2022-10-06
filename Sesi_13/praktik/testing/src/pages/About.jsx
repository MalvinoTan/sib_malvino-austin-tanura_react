import { Link } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <Link to="/" className="btn btn-success btn-lg mb-4" type="button" role="button">
                Back to Home
            </Link>
            <h1>About Me</h1>
            <hr />
            <p>
                Saya merupakan seorang Software Engineer dan juga mahasiswa tingkat akhir yang tertarik dengan programming
            </p>

            <h2>Biodata</h2>

            <h3>Nama</h3>
            <p>Malvino Austin Tanura</p>

            <h3>Universitas</h3>
            <p>Universitas Mikroskil</p>

            <h3>Tanggal Lahir</h3>
            <p>13 Agustus 2001</p>

            <h3>Prinsip</h3>
            <p>Always be better</p>

            <h3>Visi Misi</h3>
            <p>Jalani hidup dengan bahagia dan baik-baik saja</p>
        </div>
    );
};

export default About;