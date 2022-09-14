import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const Download = () => {
	return (
		<div className={`${styles.section} ${styles.bgWhite}`}>
			<div className={`${styles.subSection} flex-col text-center`}>
				<div>
					<h1 className={`${styles.h1Text} ${styles.blackText}`}>
						Download the source code
					</h1>
					<p className={`${styles.pText} ${styles.blackText}`}>
						Get the full source code on Github
					</p>
					<button className={styles.btnPrimary}>Source Code</button>
					<div className={styles.flexCenter}>
						<img
							src={assets.scene}
							alt="download scene"
							className={styles.fullImg}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Download;